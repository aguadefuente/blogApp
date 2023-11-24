// import Bloglist from "./Bloglist";
// import useFetch from "./useFetch";
import DisplayData from "./DisplayData";


const Home = () => {
return <DisplayData/>
}


// const Home = () => {
//    const {data: blogs, isPending, error} = useFetch("http://127.0.0.1:8000/blogs/") //aquí determinamos el valor de la url
//    //renombramos la property de data a blogs para que en este caso tenga que ver con nuestra aplicación que es de un Blog

//     return ( 
//     <div className="home">
//         {error && <div>{error}</div>}
//         {/*&& operator para que cdo aún no llegue la data que aparezca ...loading */}
//         {isPending && <div>...loading</div>}
//         {/*&& operator se asegura que una vez la data llegue se renderice 
//         - sino estíamos haciendo un map sobre un null que es el valor inicial 
//         del useState blogs 
//         Aquí nos traería todos los blogs
//         {blogs && <Bloglist blogprop={blogs} titleprop="All Blogs"></Bloglist>}
//         */}

//         {/*Para ejercitar el filter() method: 
//         queremos que traiga los blogs que haya escrito Mario

//         {blogs && <Bloglist blogprop={blogs.filter((blog) => blog.author === "mario")} titleprop="Mario`s Blog"></Bloglist>}
//         */}

//          {/*Para ejercitar el filter() method: queremos que traiga los blogs que 
// no estén archivados*/}
        
//         {blogs && <Bloglist blogprop={blogs.filter((blog) => !blog.isDeleted)}></Bloglist>}

//     </div>
//     );
// }

export default Home;
