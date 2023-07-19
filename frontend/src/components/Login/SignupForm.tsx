import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, Box, Input, InputLabel, Button, FormHelperText } from '@mui/material';
import { createUserAPI } from '../../api';
import { loginStyles } from './styles';
import { Profanity, ProfanityOptions } from '@2toad/profanity';

// Set up profanity checker
const options = new ProfanityOptions();
options.wholeWord = false;
const profanity = new Profanity(options);

interface SignupFormProps {
  name: string;
  email: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ name, email }) => {
  const styles = loginStyles();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [nameLengthError, setNameLengthError] = useState(false);
  const [nameProfanityError, setNameProfanityError] = useState(false);
  const [majorEmptyError, setMajorEmptyError] = useState(false);
  const [majorBadCharError, setMajorBadCharError] = useState(false);
  const [gradYearBadError, setGradYearBadError] = useState(false);

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

    // Reset error states
    setNameEmptyError(false);
    setNameLengthError(false);
    setNameProfanityError(false);
    setMajorEmptyError(false);
    setMajorBadCharError(false);
    setGradYearBadError(false);

    let hasErrors = false;

    // Validate name
    if (formData.name.trim() === '') {
      setNameEmptyError(true);
      hasErrors = true;
    } else if (formData.name.length < 5 || formData.name.length > 20) {
      setNameLengthError(true);
      hasErrors = true;
    }
    if (profanity.exists(formData.name)) {
      setNameProfanityError(true);
      hasErrors = true;
    }

    // Validate major
    if (formData.major.trim() === '') {
      setMajorEmptyError(true);
      hasErrors = true;
    } else if (!/^[A-Za-z\s-]+$/.test(formData.major)) {
      setMajorBadCharError(true);
      hasErrors = true;
    }

    // Validate graduation year
    if (
      formData.expectedGraduateYear === -1 ||
      formData.expectedGraduateYear < 2021 ||
      formData.expectedGraduateYear > 2028
    ) {
      setGradYearBadError(true);
      hasErrors = true;
    }

    if (hasErrors) {
      setShowError(true);
    } else {
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
      sx={{
        width: 300,
        height: 400,
        padding: '2%',
        marginTop: '20%',
        marginBottom: '20%',
        backgroundColor: 'white',
        borderRadius: '10px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <FormControl
        fullWidth
        required
        variant="standard"
        sx={styles.inputField}
        error={showError && (nameEmptyError || nameLengthError || nameProfanityError)}
      >
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          name="name"
          aria-describedby="my-helper-text"
          defaultValue={formData.name}
          onChange={onInputChange}
        />
        {!showError && (
          <FormHelperText id='name-error-text'>
            Please enter your display name
          </FormHelperText>
        )}
        {showError && (
          <>
            {nameEmptyError && (
              <FormHelperText id="name-empty-error-text">
                Please enter a display name.
              </FormHelperText>
            )}
            {nameLengthError && (
              <FormHelperText id="name-length-error-text">
                Name should be between 5 and 20 characters.
              </FormHelperText>
            )}
            {nameProfanityError && (
              <FormHelperText id="name-profanity-error-text">
                Please choose a different name without profanity.
              </FormHelperText>
            )}
          </>
        )}
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
        error={showError && (majorEmptyError || majorBadCharError)}
      >
        <InputLabel htmlFor="major">Major</InputLabel>
        <Input id="major" name="major" aria-describedby="my-helper-text" onChange={onInputChange} />
        {!showError && (
          <FormHelperText id='major-error-text'>
            Please enter your major
          </FormHelperText>
        )}
        {showError && (
          <>
            {majorEmptyError && (
              <FormHelperText id="major-empty-error-text">
                Please enter a major.
              </FormHelperText>
            )}
            {majorBadCharError && (
              <FormHelperText id="major-length-error-text">
                Major can only contain alphabetic characters, spaces, and '-'.
              </FormHelperText>
            )}
          </>
        )}
      </FormControl>
      <FormControl
        fullWidth
        required
        variant="standard"
        sx={styles.inputField}
        error={showError && (gradYearBadError)}
      >
        <InputLabel htmlFor="expected-graduate-year">Expected Graduation Year</InputLabel>
        <Input
          type="number"
          id="expected-graduate-year"
          name="expectedGraduateYear"
          aria-describedby="my-helper-text"
          onChange={onInputChange}
        />
        {!showError && (
          <FormHelperText id='grad-year-error-text'>
            Please enter your expected graduation year
          </FormHelperText>
        )}
        {showError && (
          <>
            {gradYearBadError && (
              <FormHelperText id="grad-year-bad-error-text">
                Please enter a valid graduation year.
              </FormHelperText>
            )}
          </>
        )}
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
