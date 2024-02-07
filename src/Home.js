import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home(){

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {!error && isLoading && <div>Loading...</div>}
            {!error && blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {error && <div style={{color:"red",fontSize:"1.5rem", textAlign:"center"}}>{error}</div>}
        </div>
    );
}