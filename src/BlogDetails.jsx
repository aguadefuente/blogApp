import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDatails = () => {
    const {id} = useParams()
    return ( 
        <div className="blog-details">
            <h2>Blog Datails - {id}</h2>
        </div>
     );
}
 
export default BlogDatails;