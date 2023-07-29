import React from 'react';
import { slideShowStyles } from './styles';
import desktop from '../../../images/desktop.png';

const images = require.context('../../../images/slideshowImages', true);
const styles = slideShowStyles();
const delay = 10000;

const SlideShow = () => {
  const imageList = images.keys().map((image: any) => images(image));
  const [index, setIndex] = React.useState(0);
  const indexRef = React.useRef(index);

  // Update the ref whenever the index changes (without triggering re-renders)
  React.useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // Use setInterval to handle periodic updates
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
    }, delay);
    return () => clearInterval(intervalId);
  }, [imageList]);

  return (
    <div style={{ margin: '10px 10%', width: '80%' }}>
      <img src={desktop} alt="img" style={{ width: '100%', marginTop: '8%', height: 'auto' }} />
      <div style={{ ...styles.slideshow, marginLeft: '5.3%', marginTop: '-81%' }}>
        <div
          style={{
            whiteSpace: 'nowrap',
            transform: `translate3d(${-index * 100}%, 0, 0)`,
          }}
        >
          {imageList.map((img: any, idx: React.Key | null | undefined) => (
            <div
              key={idx}
              style={{
                ...styles.slide,
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
