import { useState } from "react";

function TaskItem() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    let nextId = null;
    
    return (
        
        <>
      <h1>Inspiring sculptors:</h1>
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
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
        
    </>
    )
    
}

export default TaskItem;