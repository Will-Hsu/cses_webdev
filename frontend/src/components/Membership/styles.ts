export const membershipStyles = (isMobile?: boolean) => ({
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
    marginLeft: isMobile ? '0%' : '10%',
    position: 'relative',
    width: '90%',
    marginBottom: '100px',
  },

  eventsAttendedTitle: {
    fontWeight: 'bold',
    fontFamily: 'Chakra Petch',
    color: 'white',
    fontSize: 'clamp(32px, 5vw, 65px)',
    marginTop: '20px',
    marginBottom: '10px',
  },

  eventsAttendText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(15px, 4vw, 22px)',
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

  rewardsBody: {
    position: 'relative',
    width: '80%',
    marginBottom: '100px',
  },

  rewardBox: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    margin: '0',
    marginRight: '1%',
    width: 'clamp(100px, 8vw, 200px)',
    height: 'clamp(150px, 8vw, 230px)',
    padding: 'clamp(0px, 1vw, 20px)',
  },

  textfield: {
    '& input::placeholder, & textarea::placeholder': {
      opacity: 0.6,
      color: 'black',
    },
    backgroundColor: 'white',
    borderRadius: '10px',
    margin: '5px',
  },

  button: {
    width: '35%',
    backgroundColor: '#1F1F1F',
    margin: '6px 8px',
    borderColor: 'black',
    color: 'white',
    borderRadius: '100px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    '&[disabled]': {
      color: 'gray',
    },
  },
});
