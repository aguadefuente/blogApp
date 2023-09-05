import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDatails = () => {
    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch("http://127.0.0.1:8000/blogs/" + id)
    const history = useHistory()

    const handleDelete = () => {
     //delete request
     fetch("http://127.0.0.1:8000/blogs/" + blog.id, {
       method: "DELETE",
     }).then(()=>{
        history.push("/")
     })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDatails;