import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Header = () => {
    return (
        <div >
            <Link to="/">#VanLife</Link>
            <nav className='text-center space-x-4 '>
                <Link to='/' >Home</Link>
                <Link to='host' >Host</Link>
                <Link to='about' >About</Link>
                <Link to='vans' >Vans</Link>
            </nav>

        </div>
    )
}

export default Header
