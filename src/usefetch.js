import { useState, useEffect } from "react";

//CUSTOM HOOK - se nombran use...
//pasamos la url como  parámetro de nuestro hook, así es reutilizable
const useFetch = (url) => {
  const [data, setData] = useState(null); //la data que se renderizará
  const [isPending, setIsPending] = useState(true); //si la data todavía no llega que se muestre mensaje ...loading
  const [error, setError] = useState(null); //para mostrar el error al usuario

  //FETCH DATA -
  /*vamos a crear una fake API con un packege llamado json-server (lo instalamos)
    creamos un file llamado db.json
    en terminal escribimos npx json-server --watch ./src/db.json --port 8000 
    http://127.0.0.1:8000/blogs/ 
    a esa dirección haremos nuestro GET request*/

  //para visualizar mejor el tiempo de espera hasta que se trae la data
  //agregamos un setTimeout() dentro del useEffect - es para hacer una simulación (no usar en un código real - reatarda la entrega de la data sin necesitad)
  useEffect(() => {
    setTimeout(() => {
      //fetch nos devuelve una promesa. Entonces usamos el .then method y dentro el res object. para agarrar la data parseamos el json en un javaScript object con res.json()
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource"); //tiramos un error message que será .catch (ver nota!)
          }
          return res.json();
        }) //res.json tb devuelve una promesa. Usamos el .then method
        .then((data) => {
          //console.log(data)
          setData(data); //el (data) no es el del useState sino el del .then
          setIsPending(false); //una vez que llega la data ya no muestra el msg ...pending
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setIsPending(false); //si hay un error no se ve el msa ...pending
          setError(err.message);
        }); //para agarrar errores
    }, 2000);
  }, [url]);
  /*entonces todos estos métodos asincrónicos se aseguran de pasar a la tarea
    siguiente cuando se haya realizado la primera.
    1- fecth data (fecth())
    2- parasear el json a JavaScript object (res.json())
    3- setBlogs para que la data se renderice (setBlog(data))
    
    nota: necesitamos usar el throw Error() para poder agarrar los errores por ej) 404
    porque el catch me agarrará los errores de que el server no existe pero no si éste existe
    pero hay un error en el endPoint 
    */
  return { data, isPending, error }; //esto es lo que nos devolverá nuestro Custom-Hook. En nuestro caso un objeto con tres properties, que son la de los useState
};

export default useFetch;
