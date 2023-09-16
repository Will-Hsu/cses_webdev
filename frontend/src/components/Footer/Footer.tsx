import React from 'react';
import { Container, Grid, Typography, Link, Divider, useTheme } from '@mui/material';
import csesLogo from '../../images/logo.svg';
import { footerStyles } from './styles';
import Forms from './Forms';

const links = [
  { text: 'INSTAGRAM', link: 'https://www.instagram.com/cses_ucsd/' },
  { text: 'FACEBOOK', link: 'https://www.facebook.com/csesucsd' },
  { text: 'LINKEDIN', link: 'https://www.linkedin.com/in/csesucsd/' },
  { text: 'LINKTREE', link: 'https://linktr.ee/csesucsd' },
  { text: 'DISCORD', link: 'https://discord.gg/ury4n5sA' },
];

const contact = ['UC San Diego', '9500 Gilman Dr.', 'La Jolla', 'CA 92093'];

const Footer = () => {
  const theme = useTheme();
  const styles = footerStyles(theme);
  return (
    <Container disableGutters maxWidth={false} sx={styles.footer}>
      <Grid container spacing={2}>
        <Grid item sx={{ marginRight: 'auto' }}>
          <a href="/">
            <img src={csesLogo} alt="logo" style={{ height: '80px', margin: '20px' }} />
          </a>
          <Grid container spacing={2} sx={{ margin: '10px' }}>
            <Grid item sx={{ marginRight: '50px' }}>
              {links.map(({ text, link }, id) => (
                <Typography key={id} sx={{ textAlign: 'center', marginBottom: '15px' }}>
                  <Link href={link} sx={styles.text}>
                    {text}
                  </Link>
                </Typography>
              ))}
            </Grid>
            <Grid item>
              {contact.map((text, id) => (
                <Typography key={id} sx={styles.text}>
                  {text}
                </Typography>
              ))}
              {/* <Typography sx={styles.text} style={{ marginTop: '30px' }}>
                (862) 223-9756
              </Typography> */}
              <Link sx={styles.text} href="mailto:cses@eng.ucsd.edu">
                cses@eng.ucsd.edu
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ margin: '20px' }}>
          <Forms />
        </Grid>
      </Grid>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          <Divider sx={styles.divider} />
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0px' }}>
            <Typography sx={styles.footerNote}>© 2023 All Rights Reserved CSES at UCSD</Typography>
            <Typography sx={styles.footerNote}>
              <Link
                href="https://www.privacypolicies.com/live/6398f18c-8e29-4bd5-8f73-7352a244ac95"
                sx={{ textDecorationColor: 'white', color: 'white' }}
              >
                Privacy Policy
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
