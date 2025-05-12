import Title from './Title';
import Info from './info';

function HomePage() {
  return (
    <div className='flex flex-col items-center m-0 p-0'>
        <Title /> 
        <Info />
    </div>
  );
}

export default HomePage;