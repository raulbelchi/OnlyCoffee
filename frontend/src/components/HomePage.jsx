import React from 'react';
import Title from './Title';
import Info from './info';

function HomePage() {
  return (
    <div className='flex flex-col items-center'>
        <Title /> 
        <Info />
    </div>
  );
}

export default HomePage;