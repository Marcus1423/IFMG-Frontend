import { useEffect, useState } from "react";
import axios from "axios"


function AtividadeAxios() {
    const [data, setPosts] = useState([])

    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setPosts(response.data))
    .catch(error => console.error(error))
    }, [])

    return (
        <>
            {data.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))}
        </>
       
    )
} 

export default AtividadeAxios;