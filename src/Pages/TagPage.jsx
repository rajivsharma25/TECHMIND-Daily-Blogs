import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const TagPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center 
    gap-y-1 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]">
      <Header />
      <div className='w-11/12 min-h-screen max-w-[670px] pt-8 flex flex-col mt-[66px]'>
      <div>
        <button
        className="px-4 py-1 rounded-md 
        bg-gradient-to-b from-[#1a1a1a] to-black 
        text-white 
        border border-white/10 
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_2px_8px_rgba(0,0,0,0.6)] 
        hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] 
        transition duration-200"  
        onClick={() => navigation(-1)}>
            Back
        </button>
        <h2 className='my-5 text-2xl font-bold'>
            Blogs Tagged <span className="text-blue-600 underline">{`#${tag}`}</span>
        </h2>
      </div>
      <div className='-mt-24'>
        <Blogs/>
      </div>
      </div>
      <Pagination/>
    </div>
  );
};

export default TagPage;
