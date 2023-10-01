export const event_style = () => ({
  outerBox: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderTopRightRadius: '40px',
    margin: '0 auto',
    width: '390px',
    padding: '0px 10px 15px 15px',
    '&:hover': {
      boxShadow: '0 0 20px 5px rgba(52, 152, 219, 0.7)',
      backgroundColor: '#E8FBFF',
    },
  },
  innerBox: {
    padding: '25px',
    width: '350px',
    marginTop: '5px',
    borderTopRightRadius: '40px',
    background: 'linear-gradient(45deg, rgba(32,42,68) 0%, transparent 100%), black',
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  centered_element: {
    width: '400px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '0rem',
  },
  spacer: {
    width: '20px',
    height: '20px',
    margin: '30px',
  },
  buttons: {
    position: 'absolute',
    zIndex: 10,
  },
});
