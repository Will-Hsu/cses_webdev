import React from 'react';
import { Container, Grid, Typography, Link, Divider, useTheme } from '@mui/material';
import InstagramIcon from '../../images/instagram-icon.svg'
import FacebookIcon from '../../images/facebook-icon.svg';
import LinkedInIcon from '../../images/linkedin-icon.svg';
import DiscordIcon from '../../images/discord-icon.svg';
import LinktreeIcon from '../../images/linktree-icon.svg';
import csesLogo from '../../images/logo.svg';
import { footerStyles } from './styles';
import Forms from './Forms';

const links = [
  { logo: InstagramIcon, link: 'https://www.instagram.com/cses_ucsd/'},
  { logo: FacebookIcon, link: 'https://www.facebook.com/csesucsd'},
  { logo: LinkedInIcon, link: 'https://www.linkedin.com/in/csesucsd/'},
  { logo: DiscordIcon, link: 'https://discord.gg/vd9aFu4V'},
  { logo: LinktreeIcon, link: 'https://linktr.ee/csesucsd'},
]

const address = ['UC San Diego', '9500 Gilman Dr. La Jolla, CA 92093'];
const contact = ['(862) 223-9756', 'cses@ucsd.edu'];

const Footer = () => {
  const theme = useTheme();
  const styles = footerStyles(theme);
  return (
    <Container disableGutters maxWidth={false} sx={styles.footer}>
      <Grid container spacing={2}>
        <Grid item sx={{ marginRight: 'auto' }}>
          <a href="/">
            <img src={csesLogo} alt="logo" style={{ height: '80px' }} />
          </a>
          <Grid container spacing={ 4 }
            sx={{ 
              margin: '10px',
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center', 
              marginTop: '40px',
              marginLeft: '0'
            }}>
            {links.map(({logo, link}, id) => (
              <Link href={link} target='_blank' rel='noopener noreferrer'>
                <img 
                  src={logo} 
                  alt='logo' 
                  style={{ 
                    maxWidth: '50px', 
                    maxHeight: '50px' 
                  }}
                /> 
              </Link>
            ))} 
          </Grid>
          <Grid item sx={{ marginTop: '40px' }}>
              {address.map((text, id) => (
                <Typography key={id} sx={styles.text}>
                  {text}
                </Typography>
              ))}
          </Grid>
          <Grid item sx={{ marginTop: '40px' }}>
              {contact.map((text, id) => (
                <Typography key={id} sx={styles.text}>
                  {text}
                </Typography>
              ))}
          </Grid>
        </Grid>
        <Grid item sx={{ margin: '20px', marginLeft: 0 }}>
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
