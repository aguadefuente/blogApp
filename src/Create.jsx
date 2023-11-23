import { useEffect, useState } from "react";
import {useHistory, useLocation, useParams} from "react-router-dom";

const Create = () => {
    const {id} = useParams() //para hacer el patch y poder modificar según el id parameter
    //para los datos del blog
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mario") //para que uno de las options ya esté seleccionada
    //para cuando se cree el blog me lleve a home
    const history = useHistory()
   
    //para el POST request y el estilo del ADD BLOG botón
    const [isPending, setIsPending] = useState(false)

    const location = useLocation(); //gives us access to the current location object
    console.log("location", location) //The location object contains information about the current URL and can be used to access query parameters, path names, and other details related to the current route.

    //un fetch para el Patch, así los input contienen los valores del post a modificar
    if(location.pathname.startsWith("/update")) {
      useEffect(()=>{
        fetch("http://127.0.0.1:8000/blogs/" + id)
          .then((res) => {
            console.log(res);
            if (!res.ok) {
              throw Error("Could not fetch the data for that resource"); 
            }
            return res.json()
          })
          .then((data)=>{
            setTitle(data.title)
            setBody(data.body)
          })
          .catch((err) => {
            console.log(err.message);
          });
      },[])
    } 

    const handleSubmit = (e) =>{
      e.preventDefault() //prevent the refresh of the page
      //Post request crea un id propio por ello nuestro objeto no nec. id
      const blog = {title, body, author} //el objeto para POST que tiene las variables de los useState
      console.log(blog)

      setIsPending(true) //mientras la data no llega

      //acá usamos useLocation comparando los pathnames
      if(location.pathname.startsWith('/create')) {
            fetch("http://127.0.0.1:8000/blogs", {
            method: "POST", //agregará el nuevo blog a la url especificada arriba
            headers: {"Content-Type": "application/json"}, //que el contenido que mandaremos será un json
            body: JSON.stringify(blog) //transforma nuestro objeto a json
            }).then(()=>{
            console.log("new blog added")
            setIsPending(false) //porque ya no está pending
            //history.go(-1) //para ir a la página anterior. Si pusiera history.go(1) iría a la página siguiente
            history.push("/") //para que me redirija a home una vez creado el blog
            })
      } else if(location.pathname.startsWith("/update") ){
        fetch("http://127.0.0.1:8000/blogs/" + id, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "PATCH",
          body: JSON.stringify(blog)
        }).then(()=>{
          console.log("cambio realizado")
          history.push("/") 
        })
        }
        
    }

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}> {/*al apretar los buttons*/}
               <label>Blog title:</label>
               <input 
                 value={title} //controlled input para trackear su valor y que esté en sintonía con el state
                 type="text" 
                 required
                 onChange={((e)=>setTitle(e.target.value))} //contrelled input
               />
               <label>Blog body:</label>
               <textarea
                 required
                 value={body}
                 onChange={(e)=>setBody(e.target.value)}
               ></textarea>
               <label>Blog author:</label>
               <select
                 value={author}
                 onChange={(e)=>setAuthor(e.target.value)}
               >
                <option value="mario">"mario</option>
                <option value="joshi">"joshi</option>
               </select>
               {!isPending && <button>Add Blog</button>} 
               {isPending && <button disabled>Adding Blog...</button>} 
            </form>
        </div>
     );
}
 
export default Create;