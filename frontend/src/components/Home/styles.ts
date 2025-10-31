export const homeStyles = () => ({
  /* ===== Page Wrapper ===== */
  pageWrapper: {
    position: 'relative' as const,
    paddingBottom: '80px',
    paddingLeft: '20px',
    paddingRight: '20px',
    overflow: 'hidden' as const,
    background: '#020F5D ',
    minHeight: '100vh',
    '@media (min-width: 600px)': {
      paddingLeft: '40px',
      paddingRight: '40px'
    },
    '@media (min-width: 900px)': {
      paddingLeft: '60px',
      paddingRight: '60px'
    },
    '@media (min-width: 1200px)': {
      paddingLeft: '80px',
      paddingRight: '80px'
    }
  },

  /* ===== Root Container ===== */
  root: {
    position: 'relative',
  },

  container: {
    position: 'relative',
  },

  /* ===== Hero Section ===== */
  heroGrid: {
    minHeight: '80vh',
    paddingTop: '100px',
    '@media (max-width: 600px)': {
      paddingTop: '150px'
    },
    '@media (min-width: 900px)': {
      paddingTop: '120px'
    }
  },

  heroTextContainer: {
    textAlign: 'left',
    paddingLeft: '0',
    '@media (max-width: 600px)': {
      textAlign: 'center',
      paddingLeft: '0'
    },
    '@media (min-width: 900px)': {
      paddingLeft: '2rem'
    },
    '@media (min-width: 1200px)': {
      paddingLeft: '4rem'
    }
  },

  heroTitleWhite: {
    fontSize: { xs: '3rem', md: '5rem' },
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Chakra Petch',
    lineHeight: 1.1,
    marginBottom: '0.5rem'
  },

  heroTitleGold: {
    fontSize: { xs: '3rem', md: '5rem' },
    fontWeight: 'bold',
    color: '#FFD700',
    fontFamily: 'Chakra Petch',
    lineHeight: 1.1,
    marginBottom: '2rem'
  },

  heroSubtitle: {
    color: 'white',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontFamily: 'Arial',
    '@media (min-width: 1200px)': {
      fontSize: '1.4rem'
    }
  },

  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: { xs: '300px', sm: '350px', md: '400px' }
  },

  logoImage: {
    width: "80%",
    height: "80%",
    objectFit: "contain" as const,
    filter: "brightness(1.1)"
  },

  /* ===== Motion Animation Props ===== */
  motionInitialLeft: { x: -100, opacity: 0 },
  motionAnimate: { x: 0, opacity: 1 },
  motionTransition: (delay: number) => ({ type: 'spring', stiffness: 50, delay }),

  /* ===== Scroll Arrow ===== */
  scrollArrowWrapper: {
    textAlign: 'center',
    marginTop: '2rem'
  },

  scrollArrow: {
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer'
  },

  /* ===== Section Wrapper ===== */
  sectionWrapper: {
    textAlign: 'center',
    marginTop: '8rem',
    marginBottom: '4rem'
  },

  sectionTitle: {
    fontSize: { xs: '2.5rem', md: '3.5rem' },
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '3rem',
    fontFamily: 'Chakra Petch'
  },

  /* ===== Statistics Cards ===== */
  statsGrid: {
    marginBottom: '3rem'
  },

  statsCard: {
    background: 'white',
    borderRadius: '8px',
    padding: '2rem 1rem',
    textAlign: 'center',
    border: '3px solid #FFD700'
  },

  statsNumber: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '0.5rem',
    lineHeight: 1
  },

  statsLabel: {
    fontSize: '1.2rem',
    color: 'black',
    fontWeight: '400',
    '@media (min-width: 1200px)': {
      fontSize: '1.4rem'
    }
  },

  /* ===== CTA Button ===== */
  ctaButton: {
    borderRadius: '40px',
    border: '2px solid transparent',
    backgroundImage:
      'linear-gradient(#0b0b0b, #0b0b0b), linear-gradient(to right, #FFCE00, #00F0FF)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    paddingX: '20px',
    paddingY: '11px',
    color: 'white',
    fontSize: '20px',
    textTransform: 'none',
    '&:hover': {
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05)), linear-gradient(to right, #FFCE00, #00F0FF)',
      color: 'black'
    },
    '@media (max-width: 600px)': {
      fontSize: '18px',
      paddingX: '16px',
      paddingY: '9px'
    },
    '@media (min-width: 1200px)': {
      fontSize: '22px',
      paddingX: '24px',
      paddingY: '13px'
    }
  },

  ctaButtonText: {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '500',
    '@media (min-width: 1200px)': {
      fontSize: '1.3rem'
    }
  },

  /* ===== Events Section ===== */
  eventsWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '60px',
    paddingRight: '60px',
    '@media (max-width: 600px)': {
      paddingLeft: '40px',
      paddingRight: '40px'
    }
  },

  eventsGrid: {
    maxWidth: '1200px'
  },

  eventCard: {
    background: 'white',
    borderRadius: '8px',
    padding: '0',
    textAlign: 'center',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    border: '2px solid transparent',
    backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #FF6B35, #00E5FF)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    position: 'relative',
    overflow: 'hidden'
  },

  eventCardContent: {
    width: '100%',
    height: '100%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  },

  eventDetails: {
    textAlign: 'center',
    color: 'black',
    width: '100%'
  },

  eventTitle: {
    fontSize: { xs: '1.1rem', sm: '1.3rem' },
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#020F5D',
    lineHeight: 1.2
  },

  eventDescription: {
    fontSize: { xs: '0.9rem', sm: '1rem' },
    marginBottom: '0.8rem',
    color: '#666',
    lineHeight: 1.3,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },

  eventLocation: {
    fontSize: { xs: '0.8rem', sm: '0.9rem' },
    marginBottom: '0.5rem',
    color: '#333',
    fontWeight: '500'
  },

  eventTime: {
    fontSize: { xs: '0.8rem', sm: '0.9rem' },
    color: '#666',
    fontWeight: '400'
  },

  eventLabel: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'black',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },

  arrowLeft: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: 'white',
    cursor: 'pointer',
    zIndex: 2,
    '@media (max-width: 600px)': {
      left: '5px',
      fontSize: '1.5rem'
    },
    '&:hover': {
      opacity: 0.7
    }
  },

  arrowRight: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: 'white',
    cursor: 'pointer',
    zIndex: 2,
    '@media (max-width: 600px)': {
      right: '5px',
      fontSize: '1.5rem'
    },
    '&:hover': {
      opacity: 0.7
    }
  },

  /* ===== Community Logos ===== */
  communityLogo: {
    width: "300px",
    height: "300px",
    objectFit: "contain" as const,
    filter: "brightness(1.1)",
    '@media (max-width: 600px)': {
      width: "150px",
      height: "150px"
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      width: "200px",
      height: "200px"
    },
    '@media (min-width: 1200px)': {
      width: "350px",
      height: "350px"
    }
  },

  /* ===== Where We Are Section ===== */
  carouselWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  },

  carouselContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: { xs: '2rem', md: '4rem' },
    flexDirection: { xs: 'column', md: 'row' },
    width: '100%',
    maxWidth: '600px'
  },

  photoContainer: {
    width: { xs: '250px', md: '300px' },
    height: { xs: '250px', md: '300px' },
    background: 'linear-gradient(45deg, #FFD700 0%, #00E676 100%)',
    borderRadius: '15px',
    padding: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  photoInner: {
    width: '100%',
    height: '100%',
    background: '#f0f0f0',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },

  carouselText: {
    textAlign: { xs: 'center', md: 'left' },
    color: 'white'
  },

  carouselPosition: {
    fontSize: { xs: '1rem', md: '1.4rem' },
    marginBottom: '1rem',
    lineHeight: 1.2
  },

  carouselClass: {
    fontSize: { xs: '1.4rem', md: '1.6rem' },
    marginBottom: '1rem',
    opacity: 0.9
  },

  carouselName: {
    fontSize: { xs: '1.4rem', md: '2rem' },
    lineHeight: 1.2
  },

  /* ===== Navigation Dots ===== */
  dotsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '2rem',
    marginBottom: '3rem'
  },

  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.8)'
    }
  },

  dotActive: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#FFD700',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  /* ===== Sponsors Section ===== */
  sponsorSubtitle: {
    color: 'white',
    fontSize: '1rem',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
    '@media (min-width: 1200px)': {
      fontSize: '1.2rem'
    }
  },

  sponsorLogo: {
    width: "150px",
    height: "150px",
    objectFit: "contain" as const,
    filter: "brightness(1.1)",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    padding: "10px",
    '@media (max-width: 600px)': {
      width: "100px",
      height: "100px"
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      width: "120px",
      height: "120px"
    },
    '@media (min-width: 1200px)': {
      width: "180px",
      height: "180px"
    }
  },

  sponsorLogoTall: {
    width: "250px",
    height: "350px",
    objectFit: "contain" as const,
    filter: "brightness(1.1)",
    '@media (max-width: 600px)': {
      width: "200px",
      height: "300px"
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      width: "220px",
      height: "320px"
    },
    '@media (min-width: 1200px)': {
      width: "280px",
      height: "400px"
    }
  },

  emptySponsorCard: {
    background: 'white',
    borderRadius: '15px',
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120px'
  },

});