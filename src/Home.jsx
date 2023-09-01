import {useState, useEffect} from "react"
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    //FETCH DATA - 
    /*vamos a crear una fake API con un packege llamado json-server (lo instalamos)
    creamos un file llamado db.json
    en terminal escribimos npx json-server --watch ./src/db.json --port 8000 
    http://127.0.0.1:8000/blogs/ 
    a esa dirección haremos nuestro GET request*/
    
    
useEffect(() => {
    fetch("http://127.0.0.1:8000/blogs/")
    .then(res=>{
        return res.json()
        })
        .then(data=>{
        //console.log(data)
        setBlogs(data)
        }) 
            
    }, []);


    return ( 
    <div className="home">
        {blogs && <Bloglist blogprop={blogs} titleprop="All Blogs"></Bloglist>}
        {/*Volveos a usar el componente Bloglist pero con otra data - 
        usaremos filter() para que traiga sólo los blogs escritos por mario
        */}
        {blogs && <Bloglist blogprop={blogs.filter((blog) => blog.author === "mario")} titleprop="Mario`s Blog"></Bloglist>}
    </div>
    );
}

export default Home;
