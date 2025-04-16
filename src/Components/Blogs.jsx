import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {

  //consume context using useContext hook
  const {loading, posts} = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-7 mt-[66px] mb-[66px]'>
      {
        loading ? 
        (<Spinner/>):
        (
          posts.length===0?
          (<div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">No Blogs Found !</p>
          </div>):
          (posts.map((post)=>(
            <BlogDetails key={post.id} post={post}/>
          )))
        )
      }
    </div>
  )
}

export default Blogs