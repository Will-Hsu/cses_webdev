export const opportunitiesStyles = (theme: any) => ({
  bg: {
    transform: 'rotate(-140deg)',
    marginTop: '70%',
    marginLeft: '-20%',
    scale: '150%',
    opacity: '0.8',
  },
  bg2: {
    transform: 'rotate(130deg)',
    marginTop: '300%',
    marginLeft: '-20%',
    scale: '150%',
    opacity: '0.8',
  },
  body: {
    position: 'relative',
    top: '93px',
    width: '80%',
    marginBottom: '200px',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Chakra Petch, sans-serif',
    color: 'white',
    fontSize: '65px',
    marginTop: '50px',
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
      fontSize: '45px',
      marginTop: '30px',
      marginBottom: '10px',
    },
  },
  test: {
    fontFamily: 'Inter, sans-serif',
    color: 'white',
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  subtitle: {
    fontWeight: 'bold',
    fontFamily: 'Inter, sans-serif',
    color: 'white',
    fontSize: '48px',
    [theme.breakpoints.down('md')]: {
      fontSize: '35px',
    },
  },
  greyBox: { width: '300px', height: '150px', backgroundColor: 'grey', margin: '1%' },
  sponsor: {
    width: '300px',
  },
  link: { display: 'flex', justifyContent: 'center' },
});
