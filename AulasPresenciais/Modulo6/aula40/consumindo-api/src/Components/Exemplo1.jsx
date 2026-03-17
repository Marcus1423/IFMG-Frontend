import { useEffect, useState } from "react";


function Exemplo1() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
    }, [])

    return (
        <>
            {posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))}
        </>
       
    )
} 

export default Exemplo1;