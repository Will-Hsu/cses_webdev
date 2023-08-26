export const event_style = () => ({
  bg1: {
    opacity: '0.8',
    width: '100%',
    margin: '10% 0%',
    transform: 'rotate(-25deg)',
    scale: '120%',
    top: '0%',
    marginTop: '-10%',
  },
  bg2: {
    opacity: '0.8',
    width: '100%',
    scale: '120%',
    transform: 'scaleX(-1) scaleY(-1)',
    margin: '30% 0%',
    marginTop: '100%',
  },
  eventsContainer: {
    color: 'white',
    fontSize: '20px',
    fontFamily: 'Chakra Petch',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'row' as 'row',
    flexWrap: 'wrap' as 'wrap' | 'nowrap' | 'wrap-reverse',
    marginLeft: '39px',
    maxWidth: '1024px',
    overflowX: 'scroll' as
      | 'scroll'
      | 'auto'
      | 'hidden'
      | 'visible'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'unset',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr)',
    gap: '40px',
  },
  body: { position: 'relative', top: '93px', marginBottom: '200px' },
});
