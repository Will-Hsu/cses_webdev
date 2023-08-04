export const event_style = () => ({
  bg1: { width: '100%', margin: '10% 0%', transform: 'rotate(-25deg)', scale: '135%' },
  bg2: { width: '100%', transform: 'scaleX(-1) scaleY(-1)', margin: '30% 0%' },
  body: { position: 'absolute', top: '93px' },
  // Add the new styles for the event container
  eventContainer: {
    color: 'white',
    fontSize: '20px',
    fontFamily: 'Chakra Petch',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '39px',
    flexWrap: 'wrap',
    maxWidth: '1000px',
  },

  // New style for the event box container
  eventBoxContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
});
