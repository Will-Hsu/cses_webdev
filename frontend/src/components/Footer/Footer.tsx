import React from 'react';
import { Grid, Typography, Link, Divider } from '@mui/material';
import csesLogo from '../../images/logo.svg';
import { footerStyles } from './styles';

const links = [
  { text: 'INSTAGRAM', link: 'https://www.instagram.com/cses_ucsd/' },
  { text: 'FACEBOOK', link: 'https://www.facebook.com/csesucsd' },
  { text: 'LINKEDIN', link: 'https://www.linkedin.com/in/csesucsd/' },
  { text: 'LINKTREE', link: 'dne' },
  { text: 'YOUTUBE', link: 'dne' },
];

const contact = ['UC San Diego', '9500 Gilman Dr.', 'La Jolla', 'CA 92093', '(862) 223-9756'];

const Footer = () => {
  const styles = footerStyles();
  return (
    <footer style={{ backgroundColor: '#1F3A7E', bottom: 0, width: '100%', padding: '30px' }}>
      <img src={csesLogo} alt="logo" style={{ height: '80px', margin: '20px' }} />
      <Grid container spacing={2} sx={{ margin: '10px' }}>
        <Grid item sx={{ marginRight: '50px' }}>
          {links.map(({ text, link }) => (
            <Typography sx={{ textAlign: 'center', marginBottom: '10px' }}>
              <Link href={link} sx={styles.text}>
                {text}
              </Link>
            </Typography>
          ))}
        </Grid>
        <Grid item>
          {contact.map((text) => (
            <Typography sx={styles.text}>{text}</Typography>
          ))}
          <Link sx={styles.text} href="mailto:cses@eng.ucsd.edu">
            cses@eng.ucsd.edu
          </Link>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          <Divider sx={styles.divider} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Typography sx={styles.footerNote}>© 2023 All Rights Reserved CSES at UCSD</Typography>
            <Typography sx={styles.footerNote}>
              <Link href="/privacy-policy" sx={{ color: 'white' }}>
                Privacy Policy
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
