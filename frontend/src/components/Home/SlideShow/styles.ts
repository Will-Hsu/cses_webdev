export const slideShowStyles = () => ({
  slideshow: {
    margin: '0 auto',
    overflow: 'hidden',
    maxWidth: '65%',
  },
  slide: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
    clipPath: 'polygon(3% 9.5% , 98% 2.5%, 98% 97%, 3% 97%)',
    paddingTop: '86%', // 16:9 aspect ratio (adjust as needed)
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
});
