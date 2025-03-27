import React from 'react';
import Post from './Post';

function PostPage() {
  return (
    <div className='h-screen p-5 flex mt-20 gap-4'
    >
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto self-start'>Nuevo post</button>
        <div className='gap-4 p-4 h-full w-300 flex flex-col items-center overflow-y-scroll bg-fixed'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
  );
}

export default PostPage;