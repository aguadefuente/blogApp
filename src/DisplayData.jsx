import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
import { useLocation } from "react-router-dom";

const DisplayData = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://127.0.0.1:8000/blogs/");
  const location = useLocation();

  console.log(JSON.stringify(blogs));
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {/*&& operator para que cdo aún no llegue la data que aparezca ...loading */}
      {isPending && <div>...loading</div>}
      {/*&& operator se asegura que una vez la data llegue se renderice 
        - sino estíamos haciendo un map sobre un null que es el valor inicial 
        del useState blogs 
        Aquí nos traería todos los blogs
        {blogs && <Bloglist blogprop={blogs} titleprop="All Blogs"></Bloglist>}
        */}

      {/*Para ejercitar el filter() method: 
        queremos que traiga los blogs que haya escrito Mario

        {blogs && <Bloglist blogprop={blogs.filter((blog) => blog.author === "mario")} titleprop="Mario`s Blog"></Bloglist>}
        */}

      {/*Para ejercitar el filter() method: queremos que traiga los blogs que 
no estén archivados*/}
      {blogs && (
        <Bloglist
          blogprop={
            location.pathname.startsWith("/archive")
              ? blogs.filter((blog) => blog.isDeleted)
              : blogs.filter((blog) => !blog.isDeleted)
          }
          titleprop={
            location.pathname.startsWith("/archive") ? "Archive" : "Blogs"
          }
        />
      )}
    </div>
  );
};

export default DisplayData;
