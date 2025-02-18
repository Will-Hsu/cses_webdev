export const tempStyles = () => ({
  body: { 
  width: {xs: '100%', sm: '100%'}, 
  position: 'relative',
  top: '93px',
  marginBottom: '200px',
  padding: 0,
 },
  root: {
    position: 'relative',
  },
  mainTitleBottom: {
    color: 'white',
    fontSize: 'clamp(20px, 8vw, 65px)',
    fontFamily: 'Chakra Petch',
    marginTop: { xs: '28%', sm: '20%', md: '12%' },
    fontWeight: 700,
  },
  subtitle: {
    fontWeight: 'bold',
    fontFamily: 'Inter, sans-serif',
    color: 'white',
    fontSize: 'clamp(30px, 3vw, 48px)',
  },
  opportBox: { 
    backgroundColor: 'rgba(255,255,255,0.2)',
    maxWidth: { xs: '80%', sm: '80%', xl: '70%'},
    boxSizing: 'border-box',
    margin: '100px auto',
    border: '1px solid #50A0A9',
    borderRadius: '15px',
  },
  joinbtn: {
    backgroundColor: '#50A0A9',
    color: 'white',
    borderRadius: '9px',
    border: '1px solid white', 
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: 'Inter',
    padding: '10px, 20px',
  },
  projlist: {
    backgroundColor: '#50A0A9',
    width: '100%', 
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    mt: '10px', 
    mb: '10px',
    ml: '0',
    mr: '0',
    flexDirection: {xs : 'column'},
  }
});

