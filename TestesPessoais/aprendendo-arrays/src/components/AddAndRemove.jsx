import { useState } from 'react';

let nextId = 0;

export function AddAndRemove() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  function AddArray() {
    if (name.trim() ==="") return
    
    setArtists([
          ...artists,
          { id: nextId = Date.now(), name: name }
        ]);
        
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={AddArray}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>Id: {artist.id}{' '}
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
