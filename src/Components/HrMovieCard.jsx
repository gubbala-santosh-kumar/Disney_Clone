import React from 'react'
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original";

function HrMovieCard({movie}) {
  return (
    <div className='hover:scale-110 transition-all duration-300 ease-in'>
        <img src={IMAGE_BASE_URL+movie.backdrop_path} alt="movie card" 
        className='w-[110px] md:w-[260px] rounded-lg 
        hover:border-[3px] border-gray-400'/>
        <h2 className='w-[110px] md:w-[260px] text-white mt-2' >{movie.title}</h2>
    </div>
  )
}

export default HrMovieCard