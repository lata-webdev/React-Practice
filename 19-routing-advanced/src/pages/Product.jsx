import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 py-4'>
                <Link className='font-semibold text-xl' to='/product/men'>Men</Link>
                <Link className='font-semibold text-xl' to='/product/women'>Women</Link>
                <Link className='font-semibold text-xl' to='/product/kids'>Kids</Link>
            </div>
            {/* //render the matching child route of a parent route  */}
            <Outlet />
        </div>
    )
}

export default Product
