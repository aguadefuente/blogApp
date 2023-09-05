import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import BlogDatails from "./BlogDetails";
import NotFound from "./NotFound";


function App() {

  //const link = "https://www.google.com/" //ejemplo de como agregar un link

  return (
    <>
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/"> {/*exact es para que sólo matchee cuando tiene / sólo sino por ej) /create la toma como lo mismo y me carga el home - siendo eso algo que no queremos */}
              <Home/>
            </Route>
  
            <Route path="/create">
              <Create/>
            </Route>

            <Route path="/blogs/:id"> {/*para hacer dinámico el parám. usamos los : + cq nombre */}
              <BlogDatails/>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
       {/*<a href={link}>Google site</a>*/} 
      </div>
    </Router>
    </>
  )
}

export default App
