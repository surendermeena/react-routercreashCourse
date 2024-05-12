import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
      <Link to="/">#VanLife</Link>


      <nav className='text-center space-x-4'>
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/vans' >Vans</Link>
      </nav>





    </div>
  )
}

export default Navbar
