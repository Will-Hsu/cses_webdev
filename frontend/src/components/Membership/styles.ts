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
    width: '80%',
    marginBottom: '100px',
  },

  eventsAttendedTitle: {
    fontWeight: 'bold',
    fontFamily: 'Chakra Petch, sans-serif',
    color: 'white',
    fontSize: '65px',
    marginTop: '20px',
    marginBottom: '10px',
    // [theme.breakpoints.down('md')]: {
    //   fontSize: '45px',
    //   marginTop: '30px',
    //   marginBottom: '10px',
    // },
  },

  eventsAttendedTitleMobile: {
    fontWeight: 'bold',
    fontFamily: 'Chakra Petch, sans-serif',
    color: 'white',
    fontSize: '45px',
    marginTop: '20px',
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
  },

  leaderBoardBody: {
    position: 'relative',
    overflow: 'hidden',
    width: '80%',
    marginBottom: '100px',
  },

  leaderBoardRanking: {
    fontWeight: 900,
    fontFamily: 'Inter, sans-serif',
    fontSize: '60px',
    color: '#F3C969',
  },

  rankingPoints: {
    fontWeight: 700,
    fontFamily: 'Inter, sans-serif',
    fontSize: '35px',
    borderBottom: '3px solid #F3C969',
    width: 'fit-content',
  },

  rankingName: {
    fontWeight: 500,
    fontFamily: 'Inter, sans-serif',
    fontSize: '20px',
  },
});
