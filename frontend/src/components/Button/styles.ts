export const buttonStyles = (isLogin: boolean, inactive: boolean, infocus: boolean) => {
  const commonStyles = {
    fontFamily: isLogin ? 'Inter, sans-serif' : 'Chakra Petch, sans-serif',
    fontSize: isLogin ? '20px' : 'auto',
    padding: isLogin ? '2px 20px' : 'auto',
    margin: '6px 8px',
    borderColor: 'white',
    color: 'white',
    borderRadius: '10px',
    fontWeight: '500',
    textTransform: 'none',
    '&:hover': {
      borderColor: 'white',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  };

  // Apply additional styles for inactive buttons
  if (inactive) {
    return {
      ...commonStyles,
      opacity: 0.5, // Adjust the opacity for inactive buttons
      pointerEvents: 'none', // Disable pointer events for inactive buttons
    };
  }

  if (infocus) {
    return {
      ...commonStyles,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      '&:hover': {
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
    };
  }
  return commonStyles;
};
