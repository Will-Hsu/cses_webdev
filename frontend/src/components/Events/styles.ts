export const event_style = () => ({
  //outerBox: { backgroundColor: 'white', with: '425px', heigth: '437px' },

  outerBox: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderTopRightRadius: '40px',
    margin: '0 auto',
    width: '425px',
    height: '437px',
    padding: '1px 0px 10px 10px' /* Add 1px padding here */,
  },
  innerBox: {
    width: '416px',
    borderTopRightRadius: '40px',
    height: '429px',
    backgroundColor: 'black',
    color: 'white',
  },

  bg1: { width: '100%', margin: '10% 0%', transform: 'rotate(-25deg)', scale: '135%' },
  bg2: {
    width: '100%',
    transform: 'scaleX(-1) scaleY(-1)',
    margin: '30% -15%',
    scale: '145%',
  },
  body: { position: 'absolute', top: '93px' },
});
