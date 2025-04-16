import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="relative w-full p-6 rounded-2xl bg-gradient-to-tr from-white/30 to-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <NavLink to={`/blog/${post.id}`}>
            <span className="font-bold text-lg">{post.title}</span>
        </NavLink>
        <p className="text-sm">
            By {" "}
            <span className="italic text-green-700">{post.author}</span>
            {" "}
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className="underline font-bold">{post.category}</span>
            </NavLink>
        </p>
        <p className="text-sm mt-[4px]">
            Posted on <span className="text-red-600">{post.date}</span>
        </p>
        <div className="w-full h-[1px] bg-black mt-[14px]"></div>
        <p className="text-md mt-[14px]">
            {post.content}
        </p>

        <div className="flex gap-x-2 flex-wrap">
            {
                post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className="text-[12px] text-blue-600 underline font-bold mt-[5px]">{`#${tag} `}</span>
                    </NavLink>
                ))
            }
        </div>
    </div>
  );
};

export default BlogDetails;
