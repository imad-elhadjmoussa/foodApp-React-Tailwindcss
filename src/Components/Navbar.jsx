import React from 'react'
import menuIcon from './../Images/menu.png'
import searchIcon from './../Images/search.jpg'
import buyIcon from './../Images/buy.png'


export const Navbar = ({handel}) => {
    return (
        <div className='container mx-auto flex p-3 md:p-0 justify-between items-center'>
            <div className='flex  items-center'>
                <div onClick={handel}><img className='w-9 h-9 cursor-pointer' src={menuIcon} alt="menu" /></div>
                <h1 className=' text-5xl mb-2 font-bold'>BestEats</h1>
            </div>
            <div className=' hidden md:flex'>
                <img className='w-10 cursor-pointer  h-10 rounded-l-3xl' src={searchIcon} alt="" />
                <input className=' bg-gray-100 outline-none text-black rounded-r-3xl' type="text" placeholder='Search foods ...' />
            </div>
            <div className='flex border-2 cursor-pointer rounded-xl px-2 py-1 '>
                <img src={buyIcon} className='w-7 h-7' alt="" />
                <p className='font-bold'>Cart</p>
            </div>
        </div>
    )
}

