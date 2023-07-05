export const homeStyles = () => ({
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
    fontSize: 'clamp(20px, 8vw, 65px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontFamily: 'Inter',
    marginLeft: '5%',
    marginTop: '10%',
    fontWeight: 600,
  },
  statisticContainer: {
    height: '105px',
    // width: '205px',
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
    fontSize: 'clamp(20px, 5vw, 50px)',
    fontFamily: 'Inter',
    fontWeight: 700,
    paddingLeft: '10px',
    paddingTop: '10px',
  },
  statisticSubtitle: {
    fontSize: 'clamp(12px, 3vw, 15px)',
    fontFamily: 'Inter',
    fontWeight: 500,
    paddingLeft: '10px',
  },
  button: { 
    color: 'white', 
    fontSize: '25px', 
    fontWeight: 500, 
    fontFamily: "Chakra Petch",
    marginLeft: '11%',
    marginTop: '5%'}, 
});
