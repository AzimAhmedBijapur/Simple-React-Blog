import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsLoading(true);
        const blog = {title,body,author};
        fetch('http://localhost:8000/blogs',
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then((res)=>{
            if(!res.ok)throw Error('Oops somthing went wrong!');
            console.log('Added new blog');
            console.log(blog);
            setIsLoading(false);
            history.push('/');
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    return ( 
    <div className="create">
        <h2 style={{textAlign:"center"}}>Add new blog</h2>
        <form className="create-blog" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="field">
                <label htmlFor="blog-title">Blog-Title:</label>
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} id="blog-title" name="blog-title" required/>
            </div>
            <div className="field">
                <label htmlFor="blog-body">Blog-Body:</label>
                <textarea id="blog-body" onChange={(e)=>{setBody(e.target.value)}} name="blog-body" required/>
            </div>
            <div className="field">
                <label htmlFor="blog-authpr">Author:</label>
                <input type="text" id="blog-author" onChange={(e)=>{setAuthor(e.target.value)}} name="blog-author" required/>
            </div>
            <div className="button-field">
            { isLoading  && <button className="add-blog">Adding Blog</button>}
            { !isLoading  && <button className="add-blog">Add Blog</button>}
            </div>
        </form>
    </div>
    );
}
 
export default Create;