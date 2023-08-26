export const homeStyles = () => ({
  bg: {
    width: '100%',
    marginLeft: '-2%',
    scale: '105%',
    marginBottom: '20%',
    opacity: '0.6',
  },
  root: {
    position: 'relative',
    background: 'linear-gradient(to bottom,black 0%, #2F56BC 20%, black 55%)',
  },
  backgroundImage: {
    width: '100%',
  },
  container: {
    position: 'relative',
    top: '83px',
    marginBottom: '100px',
  },
  title: {
    color: 'white',
    fontSize: 'clamp(60px, 8vw, 85px)',
    fontFamily: 'Chakra Petch',
    marginLeft: '12%',
    marginTop: '3%',
    fontWeight: 700,
  },
  subtitle: {
    color: 'white',
    fontSize: {
      xs: 'clamp(20px, 8vw, 65px)',
      sm: 'clamp(30px, 4vw, 60px)',
    },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontFamily: 'Inter',
    marginLeft: '5%',
    marginTop: { xs: '1%', sm: '3%', md: '1%' },
    fontWeight: 600,
  },
  statisticContainer: {
    height: '105px',
    backgroundColor: '#F3C969',
    borderRadius: '0 20px 0px 0px',
    marginTop: '10%',
    marginLeft: '8%',
  },
  statisticWrapper: {
    height: '93px',
    width: '95%',
    backgroundColor: '#FFF',
    float: 'right',
    borderRadius: '0 20px 0px 0px',
  },
  statisticTitle: {
    fontSize: {
      xs: 'clamp(40px, 3vw, 100px)',
      sm: 'clamp(25px, 3vw, 40px)',
    },
    fontFamily: 'Inter',
    fontWeight: 700,
    paddingLeft: '10px',
    paddingTop: '10px',
  },
  statisticSubtitle: {
    fontSize: {
      xs: 'clamp(15px, 3vw, 50px)',
      sm: 'clamp(10px, 3vw, 15px)',
      md: 'clamp(12px, 3vw, 15px)',
    },
    fontFamily: 'Inter',
    fontWeight: 500,
    paddingLeft: '10px',
  },
  button: {
    color: 'white',
    fontSize: '25px',
    fontWeight: 500,
    fontFamily: 'Chakra Petch',
    marginLeft: '11%',
    marginTop: '3%',
  },
});
