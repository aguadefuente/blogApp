import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDatails = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://127.0.0.1:8000/blogs/" + id);
  const history = useHistory(); //para redirigirnos a distintas lados de la página web

  const handleDelete = () => {
    if (confirm("Confirm to delete the post?")) {
      //delete request
      fetch("http://127.0.0.1:8000/blogs/" + blog.id, {
        method: "DELETE",
      }).then(() => {
        history.push("/"); //para que me reenvíe a home
      });
    }
  };

  const handleArchive = (isArchiving) => {
    const url = "http://127.0.0.1:8000/blogs/" + blog.id;

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDeleted: isArchiving }),
    }).then(() => {
      if (isArchiving) {
        console.log("Archive done");
      } else {
        console.log("Unarchive done");
      }
      history.push("/");
    });
  };

  /* Hice un sólo handleEvent de los dos de abajo agregándole un parameter
  const handleArchive = () => {
    fetch("http://127.0.0.1:8000/blogs/" + blog.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDeleted: true }),
    }).then(() => {
      console.log("archive done");
      history.push("/"); //para que me reenvíe a home
    });
  };

  const handleUnarchive = () => {
    fetch("http://127.0.0.1:8000/blogs/" + blog.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDeleted: false }),
    }).then(() => {
      console.log("Unarchive done");
      history.push("/");
    });
  };
  */

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>

          <>
            {!blog.isDeleted ? (
              <>
                <button onClick={handleDelete} id="delete">
                  Delete
                </button>
                {/*UPDATE para modificar el blog, me redirige a la página create */}
                <Link to={`/update/${blog.id}`}>
                  <button id="update">Update</button>
                </Link>
                <button id="archive" onClick={() => handleArchive(true)}>
                  Archive
                </button>
              </>
            ) : (
              <button id="archive" onClick={() => handleArchive(false)}>
                Unarchive
              </button>
            )}
          </>
        </article>
      )}
    </div>
  );
};

export default BlogDatails;
