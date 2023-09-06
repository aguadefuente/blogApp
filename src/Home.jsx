import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
   const {data: blogs, isPending, error} = useFetch("http://127.0.0.1:8000/blogs/") //aquí determinamos el valor de la url
   //renombremos la property de data a blogs para que en este caso tenga que ver con nuestra aplicación que es de un Blog

    return ( 
    <div className="home">
        {error && <div>{error}</div>}
        {/*&& operator para que cdo aún no llegue la data que aparezca ...loading */}
        {isPending && <div>...loading</div>}
        {/*&& operator se asegura que una vez la data llegue se renderice - sino estíamos haciendo un map sobre un null que es el valor inicial del useState blogs */}
        {blogs && <Bloglist blogprop={blogs} titleprop="All Blogs"></Bloglist>}
        
        {/*Volveos a usar el componente Bloglist pero con otra data - 
        usaremos filter() para que traiga sólo los blogs escritos por mario
        */}
        {blogs && <Bloglist blogprop={blogs.filter((blog) => blog.author === "mario")} titleprop="Mario`s Blog"></Bloglist>}
    </div>
    );
}

export default Home;
