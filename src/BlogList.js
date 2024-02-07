import {Link} from 'react-router-dom';

const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blogList">
            <h2> {title} </h2>
            {
                blogs.map((blog)=>(
                    <div className="blog" key={blog.id}>
                        <Link to={`blogs/${blog.id}`} style={{textDecoration:'none', color:"black"}}>
                        <h2 className="blog-title">{blog.title}</h2>
                        <p >Written by {blog.author}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
            
     );
}
 
export default BlogList;