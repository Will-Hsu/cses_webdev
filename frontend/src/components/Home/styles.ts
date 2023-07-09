export const homeStyles = () => ({
  bg: {
    width: '100%',
    marginLeft: '-2%',
    scale: '105%',
    marginBottom: '20%',
    height: '100%',
  },
  root: {
    position: 'relative',
    overflowX: 'hidden',
  },
  backgroundImage: {
    width: '100%',
  },
  container: {
    position: 'absolute',
    top: '83px',
  },
  title: {
    color: 'white',
    fontSize: 'clamp(32px, 8vw, 100px)',
    fontFamily: 'Chakra Petch',
    marginLeft: '12%',
    marginTop: '5%',
    fontWeight: 700,
  },
  subtitle: {
    color: 'white',
    fontSize: {
      xs: 'clamp(20px, 8vw, 65px)',
      sm: 'clamp(15px, 8vw, 31.5px)',
      md: 'clamp(20px, 8vw, 65px)',
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
      sm: 'clamp(20px, 3vw, 30px)',
      md: 'clamp(15px, 3vw, 50px)',
    },
    fontFamily: 'Inter',
    fontWeight: 700,
    paddingLeft: '10px',
    paddingTop: '10px',
  },
  statisticSubtitle: {
    fontSize: {
      xs: 'clamp(15px, 3vw, 50px)',
      sm: 'clamp(10px, 3vw, 12px)',
      md: 'clamp(12px, 3vw, 17px)',
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
  },
});
