import { useParams } from "react-router-dom"
import { useState } from "react";

function User() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    let nextId = null;
    
    
    return (
        <>
        <h1>Id: {id}</h1>
        <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        artists.push({
          id: nextId++,
          name: name,
        });
        console.log(name)
      }}>Add</button>
        </>
    )
}

export default User;