import React from 'react'

const Header = () => {
  return (
    <div className='w-full shadow-lg py-4 fixed top-0 bg-white/30 
            backdrop-blur-md 
            border border-white/20 
            z-10'>
      <header className='text-center'>
        <h1 className='font-bold text-3xl uppercase'>TechMind Daily Blogs</h1>
      </header>
    </div>
  )
}

export default Header