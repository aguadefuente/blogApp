import "./App.css"

function App() {

  const title = "Welcome to the new blog";
  const link = "https://www.google.com/"

  return (
    <>
      <div className="App">
        <div classnName="content">{title}</div>
        <a href={link}>Google site</a>
      </div>
    </>
  )
}

export default App
