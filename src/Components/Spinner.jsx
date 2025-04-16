import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center -z-20 
    bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]'>
        <div className='spinner'></div>
    </div>
  )
}

export default Spinner