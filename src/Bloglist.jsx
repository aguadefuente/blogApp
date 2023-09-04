import { Link } from "react-router-dom/cjs/react-router-dom.min";

//Pasando Properties del padre al hijo
//con destructuring
const Bloglist = ({blogprop, titleprop}) => {
 
    return ( 
        <div className="blog-list">
            <h2>{titleprop}</h2>
            {/*hacemos un map() y usamos las props*/}
            {blogprop.map((blog) => 
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <h2>{blog.title}</h2>
                  <p>written by {blog.author}</p>
                </Link>
            </div>
        )}
        </div>
     );
}

/*
//sin destructuring
const Bloglist = (props) => {
    const blogs = props.blogprop

    return (
        <div className="blog-list">
            <h2>{props.titleprop}</h2>
            {blogs.map((blog) => 
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
            </div>
        )}
        </div>
     );
}
*/


 
export default Bloglist;