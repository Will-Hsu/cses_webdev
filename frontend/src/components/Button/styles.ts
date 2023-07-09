export const buttonStyles = (isLogin: boolean) => {
  const fontFamily = isLogin ? 'Inter, sans-serif' : 'Chakra Petch, sans-serif';
  const fontSize = isLogin ? '20px' : 'auto';
  const padding = isLogin ? '2px 20px' : 'auto';
  return {
    fontSize: fontSize,
    padding: padding,
    margin: '6px 8px',
    borderColor: 'white',
    color: 'white',
    borderRadius: '10px',
    fontFamily: fontFamily,
    fontWeight: '500',
    textTransform: 'none',
    '&:hover': {
      borderColor: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  };
};
