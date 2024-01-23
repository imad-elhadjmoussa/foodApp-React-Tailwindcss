import React from 'react'
import { Card } from './Card'
import img0 from "./../Images/image0.jpg"
import img1 from "./../Images/image1.jpg"
import img2 from "./../Images/image2.jpg"
import img3 from "./../Images/image3.jpg"



export const Hero = () => {
    return (
        <div className='container p-3 mx-auto gap-6 grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-4'>
            <div className='row-span-3 md:col-span-3 rounded-lg text-5xl flex flex-col justify-center font-bold text-white bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${img0})` }}>
                <p className='py-5 px-2' >The <span className='text-orange-900 '>Best</span></p>
                <p className='py-5 px-2'><span className='text-orange-900 '>Foods</span> Delivered</p>
            </div>
            <Card title="Sun's Out, BOGO'S Out" dis="Through 8/25" bg={img1} />
            <Card title="New Restaurants" dis="Added Daily" bg={img2} />
            <Card title="We Deliver Dessert Too" dis="Tasty Treats" bg={img3} />
        </div>
    )
}
