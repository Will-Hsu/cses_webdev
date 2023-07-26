import React from 'react';
import { slideShowStyles } from './styles';
import desktop from '../../../images/desktop.png';

const images = require.context('../../../images/slideshowImages', true);
const styles = slideShowStyles();
const delay = 10000;

const SlideShow = () => {
  const imageList = images.keys().map((image) => images(image));
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1));
      console.log(index);
      console.time();
      console.timeLog();
    }, delay);

    return () => {};
  }, [imageList, index]);

  return (
    <div>
      <img src={desktop} alt="img" style={{ width: '100%', marginTop: '8%', height: 'auto' }} />
      <div style={{ ...styles.slideshow, marginLeft: '5%', marginTop: '-81%' }}>
        <div
          style={{
            whiteSpace: 'nowrap',
            transform: `translate3d(${-index * 100}%, 0, 0)`,
          }}
        >
          {imageList.map((img, idx) => (
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
