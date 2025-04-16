import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page, handleChangePage, totalPages } = useContext(AppContext);

  return (
    <div className="w-full min-h-20 flex justify-center items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-4 fixed bottom-0 bg-white/30 
            backdrop-blur-md 
            border border-white/20 
            ">
      <div className="flex items-center justify-between w-11/12 max-w-[670px]">
        <div className="flex items-center gap-x-2">
          {page > 1 && (
            <button
              className="px-4 py-1 rounded-md 
               bg-gradient-to-b from-[#1a1a1a] to-black 
               text-white 
               border border-white/10 
               shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_2px_8px_rgba(0,0,0,0.6)] 
               hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] 
               transition duration-200"
              onClick={() => handleChangePage(page - 1)}
            >
            Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="px-4 py-1 rounded-md 
               bg-gradient-to-b from-[#1a1a1a] to-black 
               text-white 
               border border-white/10 
               shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_2px_8px_rgba(0,0,0,0.6)] 
               hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] 
               transition duration-200"
              onClick={() => handleChangePage(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
