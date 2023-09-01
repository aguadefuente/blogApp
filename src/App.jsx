import Navbar from "./Navbar";
import Home from "./Home";


function App() {

  //const link = "https://www.google.com/" //ejemplo de como agregar un link

  return (
    <>
      <div className="App">
        
        <Navbar></Navbar>
        <div className="content">
          <Home></Home>
        </div>
       {/*<a href={link}>Google site</a>*/} 
      </div>
    </>
  )
}

export default App
