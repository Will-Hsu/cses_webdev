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
    <div style={{ maxWidth: '520px' }}>
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
        onChange={(e) => console.log(e)}
      />
      <TextField
        error
        size="small"
        sx={styles.textfield}
        placeholder={'Email'}
        onChange={(e) => console.log(e)}
      />
      <TextField
        sx={styles.textfield}
        size="small"
        placeholder={'Title'}
        onChange={(e) => console.log(e)}
      />
      <Button sx={styles.button}>Send</Button>
      <TextField
        sx={styles.textfield}
        placeholder={'Tell us what you think!'}
        onChange={(e) => console.log(e)}
      />
    </div>
  );
};

export default Forms;
