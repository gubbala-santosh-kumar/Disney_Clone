import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original";

function MovieList({generID, index_}) {

    const [movieList,setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(()=>{
        getMoviesByGenereId()
    },[])

    const getMoviesByGenereId = ()=>{
        GlobalApi.getMoviesByGenereId(generID).then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideLeft=(element)=>{
        element.scrollLeft-=1000;
    }

    const slideRight=(element)=>{
        element.scrollLeft+=1000;
    }

  return (
    <div className='relative' >
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)}
            className={`text-[50px] text-white
            p-2 z-10 cursor-pointer 
            hidden md:block absolute 
            ${index_%3==0? 'mt-[75px]':'mt-[150px]'}`}/>

        <div ref={elementRef} className='flex gap-8 scrollbar-hide 
        overflow-x-auto pt-5 px-3 pb-5 cursor-pointer scroll-smooth transition-all duration-500'>
            {movieList.map((item,index)=>(
                <>
                    {index_%3==0 ? <HrMovieCard movie={item} /> :<MovieCard movie={item}/>}
                </>
            ))}
        </div>

        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
            className={`text-[50px] text-white
            p-2 z-10 cursor-pointer 
            hidden md:block absolute top-0 right-0 
            ${index_%3==0 ? 'mt-[75px]':'mt-[150px]'} `}/>
            
    </div>
  )
}

export default MovieList