import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDatails = () => {
    const {id} = useParams()
    const {data: blog, error, isPending} = useFetch("http://127.0.0.1:8000/blogs/" + id)
    const history = useHistory() //para redirigirnos a distintas lados de la página web

    const handleDelete = () => {
        if(window.confirm("Confirm to delete the post?")){
            //delete request
     fetch("http://127.0.0.1:8000/blogs/" + blog.id, {
       method: "DELETE",
     }).then(()=>{
        history.push("/") //para que me reenvíe a home
     })
        }
     
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
                    {/*UPDATE para modificar el blog, me redirige a la página create */}
                    <Link to={`/update/${blog.id}`}>
                       <button>Update</button>
                    </Link>

                </article>
            )}
        </div>
     );
}
 
export default BlogDatails;