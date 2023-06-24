import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button
        text="sample button"
        onClick={() => {
          console.log('click');
        }}
      />
      <Button text="sample button" size="large" />
      <header className="App-header">CSES website</header>
    </div>
  );
}

export default App;
