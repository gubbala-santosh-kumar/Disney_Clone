import React, { useState } from 'react';
import HeaderItem from './HeaderItem';

import logo from '../assets/Images/logo.png';
import { HiPlus, HiDotsVertical, HiSave } from "react-icons/hi";
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiStar, HiTv } from "react-icons/hi2";

function Header() {

    const [toggle,setToggle] = useState(false);


    const menu = [
        { name: 'HOME', icon: HiHome },
        { name: 'SEARCH', icon: HiMagnifyingGlass },
        { name: 'WATCH LIST', icon: HiPlus },
        { name: 'ORIGINALS', icon: HiStar },
        { name: 'MOVIES', icon: HiPlayCircle },
        { name: 'SERIES', icon: HiTv }
    ];

    return (
        <div className="flex items-center justify-between p-5">
            <div className='flex gap-8 items-center'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="Logo" />
                <div className='hidden md:flex gap-8'>
                {menu.map((item) => (
                    <HeaderItem name={item.name} Icon={item.icon} />
                ))}
                </div>

                <div className='md:hidden flex gap-5'>
                {menu.map((item, index) =>index<3&& (
                    <HeaderItem key={index} name={''} Icon={item.icon} />
                ))}
                </div>
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical}/>
                    {toggle ?<div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
                        {menu.map((item, index) =>index>2&& (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                ))}
                    </div> : null} 
                </div>

            </div>
            <img src="https://imgs.search.brave.com/uKIJCkTUPaVWe8jZZw3R7tlP3DXQauX2paI6wiF3l58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vU2FxbmdF/YkFfeUF6Y2Rmcjky/bGhHRmJoMDZSTFJ5/X2poLWduaUNraGkx/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/UTIvT0RNMk1UVTJP/QzkyWldOMC9iM0l2/ZVc5MWJtY3RjMjFw/L2JHbHVaeTFoWm5K/cFkyRnUvTFcxaGJp/MWhkbUYwWVhJdC9N/MlF0ZG1WamRHOXlM/WEJsL2IzQnNaUzFq/YUdGeVlXTjAvWlhJ/dGFXeHNkWE4wY21G/MC9hVzl1TFdOaGNu/UnZiMjR0L2JXbHVh/VzFoYkM1cWNHY18v/Y3owMk1USjROakV5/Sm5jOS9NQ1pyUFRJ/d0ptTTlOVUZQL1VF/UXhOVTAwVTJJNFVX/UkUvZFdVMlNIcEVS/R2hIZEZZMC9lbWRS/YUZSS00yOVhRbTAw/L1FVeFlXVDA" alt="user icon" className='w-[40px]  rounded-full bg-white'/>
        </div>
    );
}

export default Header;
