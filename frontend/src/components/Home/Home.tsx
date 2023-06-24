import React from 'react';
import Button from '../Button/Button';

const Home = () => {
  return (
    <div>
      <Button
        size="medium"
        text="See All Events -> "
        onClick={() => {
          console.log('click');
        }}
      />
      <Button text="sample button" size="large" />
      <header className="App-header">CSES website</header>
    </div>
  );
};

export default Home;
