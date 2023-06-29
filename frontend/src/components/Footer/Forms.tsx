import React, { useState } from 'react';
import { Button, Typography, TextField } from '@mui/material';
import { footerStyles } from './styles';

const Forms = () => {
  const styles = footerStyles();
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
    <div style={{ maxWidth: '530px', marginRight: '50px' }}>
      <Typography sx={styles.title}>Subscribe to our newsletter!</Typography>
      <TextField
        sx={styles.textfield}
        size="small"
        error={!validEmail}
        placeholder={'Enter Email Address'}
        onChange={(e) => setNewsletterEmail(e.target.value)}
      />
      <Button sx={styles.button} onClick={subscribeNewLetter}>
        Subscribe
      </Button>
      <Typography sx={styles.title}>Contact us</Typography>
      <TextField
        size="small"
        sx={styles.textfield}
        placeholder={'Name'}
        style={{ width: '250px' }}
        onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
      />
      <TextField
        size="small"
        sx={styles.textfield}
        placeholder={'Email'}
        style={{ width: '250px' }}
        onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
      />
      <TextField
        sx={styles.textfield}
        size="small"
        placeholder={'Title'}
        style={{ width: '510px' }}
        onChange={(e) => setFeedbackForm({ ...feedbackForm, title: e.target.value })}
      />
      <TextField
        sx={styles.textfield}
        placeholder={'Tell us what you think!'}
        style={{ width: '510px' }}
        rows={3}
        multiline
        onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
      />
      <Button sx={styles.button} style={{ width: '510px' }}>
        Send
      </Button>
    </div>
  );
};

export default Forms;
