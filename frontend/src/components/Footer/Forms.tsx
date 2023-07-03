import React, { useState, useRef } from 'react';
import { Alert, Button, Typography, TextField, useTheme } from '@mui/material';
import { footerStyles } from './styles';
import emailjs from '@emailjs/browser';

const Forms = () => {
  const form = useRef(null);
  const theme = useTheme();
  const styles = footerStyles(theme);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showErrorForm, setShowErrorForm] = useState(false);
  const [showSuccessForm, setShowSuccessForm] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const subscribeNewLetter = () => {
    setShowError(false);
    setShowSuccess(false);
    if (newsletterEmail === '') return;
    if (emailRegex.test(newsletterEmail)) {
      setNewsletterEmail('');
      setShowSuccess(true);
      setTimeout(function () {
        setShowSuccess(false);
      }, 5000);
    } else {
      setShowError(true);
    }
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

    console.log(form.current);
    emailjs.sendForm('service_agc83dv', 'template_ot1ic18', currentForm, 'bKHY__zvT5ujULEEk').then(
      (result) => {
        setFeedbackForm({
          name: '',
          email: '',
          title: '',
          message: '',
        });
        setShowSuccessForm(true);
        setTimeout(function () {
          setShowSuccessForm(false);
        }, 5000);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div style={{ maxWidth: '530px' }}>
      <Typography sx={styles.title}>Subscribe to our newsletter!</Typography>
      {showSuccess && (
        <Alert severity="success">Thank you for subscribing to our newsletter!</Alert>
      )}
      {showError && (
        <Alert severity="error">
          Invalid email — <strong>please re-enter a valid address!</strong>
        </Alert>
      )}
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
        onClick={subscribeNewLetter}
      >
        Subscribe
      </Button>
      <Typography sx={styles.title}>Contact us</Typography>
      {showSuccessForm && <Alert severity="success">Thank you for your feedback!</Alert>}
      {showErrorForm && (
        <Alert severity="error">
          Invalid email — <strong>please re-enter a valid address!</strong>
        </Alert>
      )}
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
        <Button type="submit" value="Send" sx={styles.button} style={{ width: '95%' }}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default Forms;
