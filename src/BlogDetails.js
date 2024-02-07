import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch  from './useFetch';
import { useState } from "react";

const BlogDetails = () => {

    const {id} = useParams();
    const history = useHistory();
    const {data:blog, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);
    const handleDelete = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:8000/blogs/${id}`,
        {
            method:"DELETE",
        })
        .then(()=>{
            console.log('Deleted blog');
            history.push('/');
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>error</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p style={{fontStyle:"italic"}}>{blog.author}</p>
                    <p className="blog-body">{blog.body}</p>
                    <div className="button-field" >
                        <button className="delete" onClick={(e)=>handleDelete(e)}>Delete</button>
                    </div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;