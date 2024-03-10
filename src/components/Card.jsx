import React from 'react'
import { FaStar } from "react-icons/fa";


const Card = (movie) => {
  const addDefaultImg = ev => {
    ev.target.src = "https://timescineplex.com/times/img/no-poster.png"
 }
  let image_path ="https://image.tmdb.org/t/p/w500"
  console.log(movie.info);
  return (
    <div className='w-1/2 md:w-1/5 m-4 relative bg-sky-950 overflow-y-hidden shadow-md shadow-black hover:scale-105 duration-200 rounded'>
        <img src={image_path+movie.info.poster_path} alt='not found' onError={addDefaultImg}
        className='' />

        <div className='p-3 flex flex-col justify-center items-center group cursor-pointer'>
            <div className='p-2 md:p-3 absolute top-0 right-0 flex items-center rounded-bl-lg bg-sky-950'>
            <FaStar className='fill-yellow-400 mr-1 mt-[2px]'/>
              <p className='text-sm '>{parseFloat(movie.info.vote_average).toFixed(1)}</p>
            </div>
            
            <div className='w-full  text-center'>
                <h1 className='text-md text-center title'>{movie.info.title}</h1>
            </div>
            <div className='mt-2 p-2 absolute bottom-0 left-0 opacity-85 bg-sky-950 overflow-y-auto translate-y-[101%] group-hover:translate-y-0 duration-300'>
                <h5 >Overview:</h5>
                <p className='font-thin text-xs'>{movie.info.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
