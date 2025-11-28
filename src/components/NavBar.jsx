import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between py-8'>
        <h2 className='text-2xl font-semibold'>Solfa Converter</h2>
        <ul className='flex gap-3'>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
        </ul>
    </nav>
  )
}

export default NavBar