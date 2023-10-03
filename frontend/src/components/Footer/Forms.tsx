import React, { useState, useRef } from 'react';
import {
  Collapse,
  Alert,
  Button,
  Typography,
  TextField,
  useTheme,
  IconButton,
} from '@mui/material';
import { footerStyles } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import { createSubscriberAPI } from '../../api';
import emailjs from '@emailjs/browser';

const Forms = () => {
  const form = useRef(null);
  const theme = useTheme();
  const styles = footerStyles(theme);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDuplicate, setShowDuplicate] = useState(false);
  const [showErrorForm, setShowErrorForm] = useState(false);
  const [showSuccessForm, setShowSuccessForm] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const subscribeNewLetter = async () => {
    setShowError(false);
    setShowSuccess(false);
    setShowDuplicate(false);
    if (newsletterEmail === '') return;
    if (emailRegex.test(newsletterEmail)) {
      const requestBody = { email: newsletterEmail };

      // call the end point
      createSubscriberAPI(requestBody)
        .then(() => {
          setNewsletterEmail('');
          setShowSuccess(true);
          setTimeout(function () {
            setShowSuccess(false);
          }, 5000);
        })
        .catch(() => {
          setShowDuplicate(true);
          setTimeout(function () {
            setShowDuplicate(false);
          }, 5000);
        });
    } else {
      setShowError(true);
    }
  };

  const alertCloseBtn = (func: any) => {
    return (
      <IconButton aria-label="close" size="small" onClick={() => func(false)}>
        <CloseIcon fontSize="inherit" />
      </IconButton>
    );
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setShowErrorForm(false);
    setShowSuccessForm(false);

    const currentForm = form.current;
    if (!emailRegex.test(feedbackForm.email) || currentForm == null) {
      setShowErrorForm(true);
      return;
    }

    emailjs.sendForm('service_agc83dv', 'template_ot1ic18', currentForm, 'bKHY__zvT5ujULEEk').then(
      () => {
        setFeedbackForm({ name: '', email: '', title: '', message: '' });
        setShowSuccessForm(true);
        setTimeout(function () {
          setShowSuccessForm(false);
        }, 5000);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div style={{ maxWidth: '530px', padding: '0' }}>
      <Typography sx={styles.title}>Subscribe to our newsletter!</Typography>

      <Collapse in={showSuccess}>
        <Alert severity="success" action={alertCloseBtn(setShowSuccess)}>
          Thank you for subscribing to our newsletter!
        </Alert>
      </Collapse>

      <Collapse in={showError}>
        <Alert severity="error" action={alertCloseBtn(setShowError)}>
          Invalid email — <strong>please re-enter a valid address!</strong>
        </Alert>
      </Collapse>

      <Collapse in={showDuplicate}>
        <Alert severity="info" action={alertCloseBtn(setShowDuplicate)}>
          Email already subscribed!
        </Alert>
      </Collapse>

      <TextField
        sx={{
          ...styles.textfield,
          width: '57%',
          [theme.breakpoints.down('sm')]: {
            width: '95%',
          },
        }}
        size="small"
        placeholder={'Enter Email Address*'}
        value={newsletterEmail}
        onChange={(e) => setNewsletterEmail(e.target.value)}
      />
      <Button
        sx={{
          ...styles.button,
          [theme.breakpoints.down('sm')]: {
            width: '95%',
          },
        }}
        disabled={newsletterEmail === ''}
        onClick={subscribeNewLetter}
      >
        Subscribe
      </Button>
      <Typography sx={styles.title}>Contact us</Typography>
      <Collapse in={showSuccessForm}>
        <Alert severity="success" action={alertCloseBtn(setShowSuccessForm)}>
          Thank you for your feedback!
        </Alert>
      </Collapse>
      <Collapse in={showErrorForm}>
        <Alert severity="error" action={alertCloseBtn(setShowErrorForm)}>
          Invalid email — <strong>please re-enter a valid address!</strong>
        </Alert>
      </Collapse>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          size="small"
          sx={{
            ...styles.textfield,
            width: '46%',
            [theme.breakpoints.down('sm')]: {
              width: '95%',
            },
          }}
          name="name"
          value={feedbackForm.name}
          placeholder={'Name*'}
          onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
        />
        <TextField
          size="small"
          sx={{
            ...styles.textfield,
            width: '47%',
            [theme.breakpoints.down('sm')]: {
              width: '95%',
            },
          }}
          name="email"
          placeholder={'Email*'}
          value={feedbackForm.email}
          onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
        />
        <TextField
          sx={{ ...styles.textfield, width: '95%' }}
          size="small"
          placeholder={'Title'}
          name="title"
          value={feedbackForm.title}
          onChange={(e) => setFeedbackForm({ ...feedbackForm, title: e.target.value })}
        />
        <TextField
          sx={{ ...styles.textfield, width: '95%' }}
          placeholder={'Tell us what you think!*'}
          rows={3}
          multiline
          value={feedbackForm.message}
          name="message"
          onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
        />
        <Button
          disabled={
            feedbackForm.message === '' || feedbackForm.email === '' || feedbackForm.name === ''
          }
          type="submit"
          sx={styles.button}
          style={{ width: '95%' }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Forms;
