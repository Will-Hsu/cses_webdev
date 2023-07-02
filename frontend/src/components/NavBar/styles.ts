export const navBarStyles = () => ({
  button: {
    fontSize: '20px',
    color: 'white',
    textTransform: 'none',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'medium',
    margin: '10px',
  },
  listitem: {
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
  menuicon: { fontSize: '35px', margin: '10px' },
  closeicon: { color: 'white', fontSize: '35px', margin: '10px 26px' },
});
