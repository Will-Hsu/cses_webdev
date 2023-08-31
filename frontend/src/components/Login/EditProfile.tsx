import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  Box,
  Input,
  InputLabel,
  Button,
  Autocomplete,
  TextField,
  FormHelperText,
} from '@mui/material';
import { createUserAPI } from '../../api';
import { loginStyles } from './styles';
import { Profanity, ProfanityOptions } from '@2toad/profanity';
import MajorsContext from './MajorsContext';
import GradYearsContext from './GradYearsContext';
import { AuthContext } from '../../context/AuthContext';

// Set up profanity checker
const options = new ProfanityOptions();
options.wholeWord = false;
const profanity = new Profanity(options);

interface EditFormProps {
  name: string;
  email: string;
  major: string;
  expectedGraduateYear: number;
}

const EditForm: React.FC<EditFormProps> = ({ name, email, major, expectedGraduateYear }) => {
  
  const styles = loginStyles();
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const availableMajors = useContext(MajorsContext);
  const availableGradYears = useContext(GradYearsContext);
  const [selectedMajor, setSelectedMajor] = useState<string | null>(major);
  const [selectedGradYear, setSelectedGradYear] = useState<string | null>(String(expectedGraduateYear));

  const [showError, setShowError] = useState(false);
  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [nameLengthError, setNameLengthError] = useState(false);
  const [nameProfanityError, setNameProfanityError] = useState(false);
  const [majorEmptyError, setMajorEmptyError] = useState(false);
  const [gradYearEmptyError, setGradYearEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    name: name,
    email: email,
    major: major,
    expectedGraduateYear: expectedGraduateYear,
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onMajorChange = (e: React.ChangeEvent<{}>, value: string | null) => {
    setSelectedMajor(value);
    setFormData({ ...formData, major: value || '' });
  };

  const onGradYearChange = (e: React.ChangeEvent<{}>, value: string | null) => {
    const numValue = Number(value);
    setSelectedGradYear(value);
    setFormData({ ...formData, expectedGraduateYear: numValue });
  };

  useEffect(() => {
    if (isLoggedIn !== true) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error states
    setNameEmptyError(false);
    setNameLengthError(false);
    setNameProfanityError(false);
    setMajorEmptyError(false);
    setGradYearEmptyError(false);

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
    if (!selectedMajor) {
      setMajorEmptyError(true);
      hasErrors = true;
    }

    // Validate graduation year
    if (!selectedGradYear) {
      setGradYearEmptyError(true);
      hasErrors = true;
    }

    if (hasErrors) {
      setShowError(true);
    } else {
      setShowError(false);
      createUserAPI(formData)
        .then(() => {
          navigate('/membership');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Box
      component="form"
      sx={styles.editForm}
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
          <FormHelperText id="name-error-text">Please enter your display name</FormHelperText>
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
        error={showError && majorEmptyError}
      >
        <Autocomplete
          id="major"
          options={availableMajors}
          value={selectedMajor}
          onChange={onMajorChange}
          renderInput={(params) => <TextField {...params} label="Major *" />}
        />
        {!showError && (
          <FormHelperText id="major-error-text">Please select your major</FormHelperText>
        )}
        {showError && (
          <>
            {majorEmptyError && (
              <FormHelperText id="major-empty-error-text">Please select your major.</FormHelperText>
            )}
          </>
        )}
      </FormControl>

      <FormControl
        fullWidth
        required
        variant="standard"
        sx={styles.inputField}
        error={showError && gradYearEmptyError}
      >
        <Autocomplete
          id="expected-graduate-year"
          options={availableGradYears}
          value={selectedGradYear}
          onChange={onGradYearChange}
          renderInput={(params) => <TextField {...params} label="Expected Graduation Year *" />}
        />
        {!showError && (
          <FormHelperText id="expected-graduate-year-error-text">
            Please select your expected graduation year
          </FormHelperText>
        )}
        {showError && (
          <>
            {gradYearEmptyError && (
              <FormHelperText id="expected-graduate-year-empty-error-text">
                Please select an expected graduation year.
              </FormHelperText>
            )}
          </>
        )}
      </FormControl>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            ...styles.inputField,
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default EditForm;