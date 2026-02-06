function Profile() {
    let name = 'Marcus Vinícius';
    let carrer = 'Desenvolvedor Front-end';
    let city = 'Contagem';
    let photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVlqQbIUN_VZBfyTlUP1XBnUUaPwja4cGvw&s';

    return(
        <div id="container_principal">
            <img id="profile_photo" src={photo} alt="Foto de perfil"/>
            <h2>{name}</h2>
            <p><strong>Profissão:</strong> {carrer}</p>
            <p><strong>Cidade:</strong> {city}</p>
        </div>
    )

   
}

ReactDOM.render(<Profile />, document.getElementById('root'));