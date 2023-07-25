import React from 'react';
import { slideShowStyles } from './styles';
import desktop from '../../../images/desktop.png';

const images = require.context('../../../images/slideshowImages', true);
const styles = slideShowStyles();
const delay = 100000;

const SlideShow = () => {
  const imageList = images.keys().map((image) => images(image));
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () => setIndex((prevIndex) => (prevIndex === imageList.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => {};
  }, [imageList]);

  return (
    <div>
      <img src={desktop} alt="img" style={{ width: '100%', marginTop: '8%', height: 'auto' }} />
      <div style={{ ...styles.slideshow, marginLeft: '5%', marginTop: '-81%' }}>
        <div
          style={{
            whiteSpace: 'nowrap',
            //transition: 'ease 1000ms',
            transform: `translate3d(${-index * 100}%, 0, 0)`,
          }}
        >
          {imageList.map((img, idx) => (
            <img src={img} key={idx} alt="img" style={styles.slide} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
