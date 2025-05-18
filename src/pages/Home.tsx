import React from 'react';
import Button from '../components/Button';

const Home: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    // Add here the desired functionality when the button is clicked
  };

  return (
    <main className="main-content">
      <h1 className="inter-heading">DocsGPT</h1>
      <Button 
        text="Transform your docs" 
        onClick={handleClick}
        className="button-header"
      />
    </main>
  );
};

export default Home;
