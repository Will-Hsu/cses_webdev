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
    position: 'relative',
    width: '80%',
    marginBottom: '100px',
  },

  eventsAttendedTitle: {
    fontWeight: 'bold',
    fontFamily: 'Chakra Petch',
    color: 'white',
    fontSize: 'clamp(32px, 5vw, 60px)',
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
    fontSize: '25px',
    // borderBottom: '3px solid #F3C969',
    width: 'fit-content',
    color: '#000000'
  },

  rankingName: {
    fontWeight: 500,
    fontFamily: 'Inter, sans-serif',
    fontSize: '17px',
    color: '#000000',
    textAlign: 'center'
  },

  leaderBoardMobileRanking: {
    fontWeight: 900,
    marginRight: '15px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '30px',
    color: '#F3C969',
    minWidth: '25px'
  },

  leaderBoardBadge: {
    backgroundColor: 'white',
    width: '20%',
    // width: '230px',
    height: '400px',
    borderRadius: '5%',
  },

  leaderBoardiPadBadge: {
    backgroundColor: 'white',
    width: '20%',
    height: '350px',
    borderRadius: '5%',
  },

  leaderBoardMobileBadge: {
    backgroundColor: 'white',
    width: '20%',
    height: '350px',
    borderRadius: '5%',
  },

  rankingMobilePoints: {
    fontWeight: 700,
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    width: 'fit-content',
  },

  rankingMobileName: {
    fontWeight: 500,
    fontFamily: 'Inter, sans-serif',
    borderBottom: '3px solid #F3C969',
    fontSize: '19px',
  },

  rewardsBody: {
    position: 'relative',
    width: '100%',
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
    width: '200px',
    height: '230px',
    padding: '20px 20px 20px 20px',
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
