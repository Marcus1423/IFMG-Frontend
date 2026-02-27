import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => setPosts(data));
}, []);

  return (
    <ul>
      {posts.map(post => (
      <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default App
