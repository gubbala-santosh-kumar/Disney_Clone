import React from 'react'

//images
import disenyimg from '../assets/Images/disney.png'
import marvelimg from '../assets/Images/marvel.png'
import nationalGimg from '../assets/Images/nationalG.png'
import pixarimg from '../assets/Images/pixar.png'
import starwarimg from '../assets/Images/starwar.png'

//videos
import disneyVideo from '../assets/Videos/disney.mp4'
import marvelVideo from '../assets/Videos/marvel.mp4'
import nationalGVideo from '../assets/Videos/national-geographic.mp4'
import pixarVideo from '../assets/Videos/pixar.mp4'
import starwarVideo from '../assets/Videos/star-wars.mp4'

function ProductionHouse() {
    const ProductionHouseList =[
        {
            id:1,
            image:disenyimg,
            video:disneyVideo
        },
        {
            id:2,
            image:pixarimg,
            video:pixarVideo
        },
        ,
        {
            id:3,
            image:marvelimg,
            video:marvelVideo
        },
        ,
        {
            id:4,
            image:starwarimg,
            video:starwarVideo
        },
        ,
        {
            id:5,
            image:nationalGimg,
            video:nationalGVideo
        },
        
    ]

  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'> 
        {ProductionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600 rounded-lg
            hover:scale-110 transition-all duration-300 cursor-pointer relative shadow-xl shadow-black'>
                <video src={item.video} autoPlay loop muted playsInline
                className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-40'></video>
                <img src={item.image} alt="gfbnhg" className='w-full z-[1]'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse