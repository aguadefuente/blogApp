import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to={"/"}>Back to the Home Page</Link>
        </div>
     );
}
 
export default NotFound;

//ir a App.jsx para ver como agramos este Route
//Si ponemos alguna ruta que no exista ej) http://127.0.0.1:5173/asasd se
//renderiza este componente