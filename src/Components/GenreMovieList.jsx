import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GenresList.genre.map((item,index)=>index<=4&&(
            <div className='p-8 px-8 md:p-16'>
                <h1 className='text-[20px] text-white font-bold'>{item.name}</h1>
                <MovieList generID={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList