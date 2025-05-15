
function Posts() {

  return (
    <div className='gap-4 p-4 h-full w-300 flex flex-col items-center overflow-y-scroll bg-fixed'>
      <div className='flex w-3/4 h-auto bg-gray-200 p-8 rounded-2xl justify-between'>
        <div>
            <div className='flex items-center gap-2'>
                <img src='https://i.pinimg.com/1200x/0f/68/94/0f6894e539589a50809e45833c8bb6c4.jpg' className='rounded-full h-15 w-15'></img>
                <span className='font-bold text-lg'>@raulbelchi_</span>
            </div>
            <div className='flex gap-8 mt-4'>
                <div>
                    <span className='font-bold text-lg'>Método de extracción</span><br/>
                    <span className='text-lg'>Espresso</span>
                </div>
                <div>
                    <span className='font-bold text-lg'>Cafetera</span><br/>
                    <span className='text-lg'>DeLonghi Magnifica</span>
                </div>
            </div>
            <div className='flex gap-8 mt-4'>
                <div>
                    <span className='font-bold text-lg'>Café</span><br/>
                    <span className='text-lg'>SyraCoffee Cajamarca</span>
                </div>
                <div>
                    <span className='font-bold text-lg'>Intensidad</span><br/>
                    <span className='text-lg'>2/5</span>
                </div>
            </div>
            <div className='mt-4 mr-30 text-justify'>
                <span className='font-bold text-lg'>Descripción</span><br/>
                <span className='text-lg '>
                    Mi café de esta mañana ha sido un delicioso latte para el que he usado
                    el café Cajamarca de SyraCoffee con origen en Perú. Extraído en mi 
                    cafetera  DeLonghi Magnifica. Se aprecian notas de chocolate, camomila 
                    y nuez moscada, muy recomendable!
                </span>
            </div>
        </div>
        <img src='https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic1562675.webp?w=760&h=1140' 
                className='rounded-lg h-100 w-auto'>
        </img>
      </div>
    </div>
  );
}

export default Posts;