import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mario") //para que uno de las options ya esté seleccionada
    const history = useHistory()


    //para el post request
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault() //prevent the refresh of the page
        //Post request crea un id propio por ello nuestro objeto no nec. id
        const blog = {title, body, author} //el objeto para postear
        console.log(blog)

        setIsPending(true)

        fetch("http://127.0.0.1:8000/blogs", {
            method: "POST", //agregará el nuevo blog a la url especificada arriba
            headers: {"Content-Type": "application/json"}, //que el contenido que mandaremos será un json
            body: JSON.stringify(blog) //transforma nuestro objeto a json
        }).then(()=>{
            console.log("new blog added")
            setIsPending(false) //porque ya no está pending
            //history.go(-1)
            history.push("/")
        })
    }

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
               <label>Blog title:</label>
               <input 
                 value={title} //controlled input
                 type="text" 
                 required
                 onChange={((e)=>setTitle(e.target.value))}
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
               {!isPending && <button>Add Blog</button>} {/*lo maneja el form onSubmit */}
               {isPending && <button disabled>Adding Blog...</button>} 
            </form>
        </div>
     );
}
 
export default Create;