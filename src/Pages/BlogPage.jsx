import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";
import Spinner from "../Components/Spinner";
import BlogDetails from "../Components/BlogDetails";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();

  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);

    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error during fetching blog and related blogs");
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center 
    gap-y-1 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]"
    >
      <Header />
      <div className='w-11/12 max-w-[670px] pt-9 flex flex-col gap-7 mt-[66px] mb-4'>

        <div>
          <button 
               className="px-4 py-1 rounded-md 
               bg-gradient-to-b from-[#1a1a1a] to-black 
               text-white 
               border border-white/10 
               shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_2px_8px_rgba(0,0,0,0.6)] 
               hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] 
               transition duration-200" 
               onClick={() => navigation(-1)}>Back</button>
        </div>

        {
        loading ? (
          <Spinner />
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2 className="my-5 text-2xl font-bold">Related Blogs</h2>
            {relatedBlogs.map((post) => (
              <div className="mb-7" key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">No Blogs Found !</p>
          </div>
        )
        }
      </div>

    </div>
  );
};

export default BlogPage;
