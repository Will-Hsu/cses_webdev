export const buttonStyles = (color: string) => ({
  borderColor: color,
  color: color,
  borderRadius: '10px',
  '&:hover': {
    borderColor: color,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
