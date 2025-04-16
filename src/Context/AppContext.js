import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";



//step;1
export const AppContext = createContext();  //context creation

export default function AppContextProvider({ children }) {

    //state
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    //data filling by fatching through API call
    async function fetchBlogPosts(page = 1, tag = null, category) {

        setLoading(true);
        // const url = `${baseUrl}?page=${page}`;
        let url = `${baseUrl}?page=${page}`;

        if (tag) {
            url += `&tag=${tag}`;
        }

        if (category) {
            url += `&category=${category}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            //data me agar posts na ho ya uska length 0 ho to error throw karega
            if (!data.posts || data.posts.length === 0)
                throw new Error("Something Went Wrong");

            console.log("API Response: ", data);

            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        }
        catch (err) {
            console.log("error occured while fetching data", err);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    //handling changing of page
    function handleChangePage(page) {
        navigate({ search: `?page=${page}`});
        setPage(page);
        // fetchBlogPosts(page);
    }

    //object that contain required data
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handleChangePage
    };

    //step;2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
