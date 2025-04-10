import React from 'react';
import Title from './Title';
import Info from './info';
import PostsForm from './PostsForm';

function HomePage() {
  return (
    <div className='flex flex-col items-center'>
        <Title />
        <PostsForm />  
        <Info />
    </div>
  );
}

export default HomePage;