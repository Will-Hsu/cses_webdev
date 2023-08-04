export const membershipStyles = () => ({
  name: {
    width: 300,
    height: 300,
    padding: '20px',
    marginY: '150px',
    backgroundColor: 'white',
    borderRadius: '10px',
  },

  attribute: {
    width: 300,
    height: 20,
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },

  eventsAttendedBody: {
    position: 'relative',
    overflow: 'hidden',
    width: '90%',
    marginRight: 0,
    marginBottom: '200px',
  },

  eventsAttendedTitle: {
    fontWeight: 'bold',
    fontFamily: 'Chakra Petch, sans-serif',
    color: 'white',
    fontSize: '65px',
    marginTop: '50px',
    marginBottom: '10px',
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '45px',
    //   marginTop: '30px',
    //   marginBottom: '10px',
    // },
  },

  eventsAttendText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '22px',
  }
});
