import React from 'react'
import xIcon from './../Images/x.png'
import {Route,Router,Routes} from 'react-router-dom'

export const Sidebar = ({ handel }) => {
    return (
        <div className='h-100vh side fixed w-64  top-0 bottom-0  shadow-3xl bg-orange-100'>
            <div className='flex justify-between items-center p-2'>
                <h1 className='text-2xl text-orange-900 font-bold' >BestEats</h1>
                <div onClick={handel} className='w-8 h-8 flex justify-end cursor-pointer'>
                    <img  src={xIcon} alt="Exsit" />
                </div>
            </div>

            <div className='mt-10'>
                <Link name="Orders" />
                <Link name="Favorites" />
                <Link name="Wallet" />
                <Link name="Help" />
                <Link name="Poromtions" />
                <Link name="Best One" />
                <Link name="Invite Frinds" />
            </div>
            


        </div>
    )
}


const Link=(props)=>{
    return(
        <div className='bg-orange-100 link p-4 hover:pl-6 cursor-pointer hover:bg-orange-200 transition ease-out duration-500'>
            <div>
                <img src={props.icon} alt="" />
            </div>
            <h2 className='font-bold'>
                {props.name}
            </h2>
        </div>
    );
}