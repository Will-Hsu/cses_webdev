export const buttonStyles = (color: string) => ({
  borderColor: color,
  color: color,
  borderRadius: '10px',
  fontFamily: 'Chakra Petch, sans-serif',
  fontWeight: '500',
  fontSize: '21px',
  textTransform: 'none',
  '&:hover': {
    borderColor: color,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
