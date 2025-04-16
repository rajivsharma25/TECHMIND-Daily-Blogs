import React, { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import { Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import { useLocation } from "react-router-dom";

export default function App() {

  //consume context using useContext hook 
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {

    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      //mean tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);  //page ki value number me convert karke
    }
    else if (location.pathname.includes("categories")) {
      //mean category wala show karna hai
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category); //tag null hai
    }
    else {
      // normal call if both not
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  // useEffect(() => {
  //   //fetch the initial Blogposts data
  //   fetchBlogPosts();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>

    // <div className="w-full h-full flex flex-col items-center justify-center 
    // gap-y-1 bg-[linear-gradient(120deg,_#a6c0fe_0%,_#f68084_100%)]">
    //   <Header />
    //   <Blogs />
    //   <Pagination />
    // </div>

  );
}
