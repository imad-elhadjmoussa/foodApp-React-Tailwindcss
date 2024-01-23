import React, { useState } from 'react'
import { useEffect } from 'react'
import { Foodcard } from './Foodcard'
import { Filtersection } from './Filtersection'
import { data as d } from '../Data/data'

export const Menu = () => {
    const [data, setData] = useState(d)

    const filterData = (type) => {
        if (type === 'All') {
            setData(d);
        } else {
            const newData = d.filter((ele) => {
                return type === ele.price || type.toLowerCase() === ele.category;
            })
            setData(newData);
        }
    }
    return (
        <>
            <Filtersection filterData={filterData} />
            <div className='container mx-auto p-3 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3'>
                {
                    data.map((ele) => {
                        return (<Foodcard key={ele.id} img={ele.image} name={ele.name} price={ele.price} />)
                    })
                }
            </div>
        </>
    )
}




