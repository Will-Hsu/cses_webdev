import React, { useState } from 'react';
import { Button, Typography, TextField, useTheme } from '@mui/material';
import { footerStyles } from './styles';

const Forms = () => {
  const theme = useTheme();
  const styles = footerStyles(theme);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const subscribeNewLetter = () => {};

  return (
    <div style={{ maxWidth: '530px' }}>
      <Typography sx={styles.title}>Subscribe to our newsletter!</Typography>
      <TextField
        sx={{
          ...styles.textfield,
          width: '57%',
          [theme.breakpoints.down('sm')]: {
            width: '95%',
          },
        }}
        size="small"
        error={!validEmail}
        placeholder={'Enter Email Address'}
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
      <TextField
        size="small"
        sx={{
          ...styles.textfield,
          width: '46%',
          [theme.breakpoints.down('sm')]: {
            width: '95%',
          },
        }}
        placeholder={'Name'}
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
        placeholder={'Email'}
        onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
      />
      <TextField
        sx={styles.textfield}
        size="small"
        placeholder={'Title'}
        style={{ width: '95%' }}
        onChange={(e) => setFeedbackForm({ ...feedbackForm, title: e.target.value })}
      />
      <TextField
        sx={styles.textfield}
        placeholder={'Tell us what you think!'}
        style={{ width: '95%' }}
        rows={3}
        multiline
        onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
      />
      <Button sx={styles.button} style={{ width: '95%' }}>
        Send
      </Button>
    </div>
  );
};

export default Forms;
