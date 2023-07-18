import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, Box, Input, InputLabel, Button, FormHelperText } from '@mui/material';
import { createUserAPI } from '../../api';
import { loginStyles } from './styles';

interface SignupFormProps {
  name: string;
  email: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ name, email }) => {
  const styles = loginStyles();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    major: false,
    expectedGraduateYear: false,
  });
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    major: '',
    expectedGraduateYear: 0,
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = { name: false, email: false, major: false, expectedGraduateYear: false };
    let hasErrors = false;

    // Validate name
    if (formData.name.trim() === '') {
      errors.name = true;
      hasErrors = true;
    }
    // TODO: add more validation - inappropriate names?

    // TODO: add more validation
    if (formData.major.trim() === '') {
      errors.major = true;
      hasErrors = true;
    } else if (!/^[A-Za-z\s-]+$/.test(formData.major)) {
      errors.major = true;
      hasErrors = true;
    }
    // Additional possibilities: whitelist of majors, min length, max length
    // TODO: Unique error messages

    // TODO: add more validation
    if (
      formData.expectedGraduateYear === -1 ||
      formData.expectedGraduateYear < 2021 ||
      formData.expectedGraduateYear > 2028
    ) {
      errors.expectedGraduateYear = true;
      hasErrors = true;
    }
    // Additional possibilities: ensure input is numeric
    // TODO: Unique error messages

    if (hasErrors) {
      setShowError(true);
      setErrors(errors);
    } else {
      setShowError(false);
      createUserAPI(formData)
        .then(() => {
          navigate('/membership');
        })
        .catch((error) => {
          console.error(error)
        });
    }
  };

  return (
    <Box
      component="form"
      sx={styles.signupForm}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <FormControl
        fullWidth
        required
        variant="standard"
        sx={styles.inputField}
        error={showError && errors.name}
      >
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          name="name"
          aria-describedby="my-helper-text"
          defaultValue={formData.name}
          onChange={onInputChange}
        />
        <FormHelperText id="major-error-text">Please enter your display name</FormHelperText>
      </FormControl>
      <FormControl fullWidth disabled variant="standard" sx={styles.inputField}>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          id="email"
          name="email"
          aria-describedby="my-helper-text"
          defaultValue={formData.email}
          onChange={onInputChange}
        />
      </FormControl>
      <FormControl
        fullWidth
        required
        variant="standard"
        sx={styles.inputField}
        error={showError && errors.major}
      >
        <InputLabel htmlFor="major">Major</InputLabel>
        <Input id="major" name="major" aria-describedby="my-helper-text" onChange={onInputChange} />
        <FormHelperText id="major-error-text">Please enter your major</FormHelperText>
      </FormControl>
      <FormControl
        fullWidth
        required
        variant="standard"
        sx={styles.inputField}
        error={showError && errors.expectedGraduateYear}
      >
        <InputLabel htmlFor="expected-graduate-year">Expected Graduation Year</InputLabel>
        <Input
          type="number"
          id="expected-graduate-year"
          name="expectedGraduateYear"
          aria-describedby="my-helper-text"
          onChange={onInputChange}
        />
        <FormHelperText id="expected-graduate-year-error-text">
          Please enter your expected gradution year
        </FormHelperText>
      </FormControl>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" type="submit" sx={styles.inputField}>
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default SignupForm;
