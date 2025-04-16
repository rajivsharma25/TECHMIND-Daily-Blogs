import React from 'react'
import Blogs from '../Components/Blogs'
import Header from '../Components/Header'
import Pagination from '../Components/Pagination'


const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center 
    gap-y-1 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]">
        <Header/>
        <Blogs />
        <Pagination/>
    </div>
  )
}  

export default Home