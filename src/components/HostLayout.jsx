import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HostLayout = () => {
    return (
        <div>
            This is Host Layout
            <nav className='border flex  py-2 mx-auto '>
                <Link to="/host"
                    className='hover:font-extrabold hover:shadow-sm rounded-lg p-2 hover:shadow-white'
                > Dashboard </Link >
                <Link to="income"
                    className='hover:font-extrabold hover:shadow-sm rounded-lg p-2 hover:shadow-white'
                > Income </Link >
                <Link to="reviews"
                    className='hover:font-extrabold  hover:shadow-sm  rounded-lg p-2 hover:shadow-white'
                > Reviews </Link >
            </nav>


            <Outlet />
        </div>
    )
}

export default HostLayout
