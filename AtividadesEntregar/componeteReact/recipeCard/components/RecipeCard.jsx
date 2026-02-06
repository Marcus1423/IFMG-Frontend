function RecipeCard() {
    const receita = {
        titulo: "Bolo de Chocolate",
        tempoPreparo: 50,
        dificuldade: "Médio",
        ingredientes: [
            "2 xícaras de farinha de trigo",
            "1 xícara de açúcar",
            "1 xícara de chocolate em pó",
            "3 ovos",
            "1 xícara de leite",
            "1 colher de fermento"
        ],
        modoPreparo: "Misture todos os ingredientes, coloque em uma forma untada e leve ao forno por 40 minutos a 180°C."
    }

    if (receita.tempoPreparo < 60) {
        receita.dificuldade = "Fácil";
    } else if (receita.tempoPreparo >= 60 && receita.tempoPreparo < 90) {
        receita.dificuldade = "Médio";
    } else if (receita.tempoPreparo > 90) {
        receita.dificuldade = "Difícil";
    }

    

    const corDificuldade = {
        Fácil: "green",
        Médio: "orange",
        Difícil: "red"
    };

    const estiloDificuldade = {
        color: corDificuldade[receita.dificuldade],
    };

    return (
        <>
            <div className="recipeCard">
                <h2>{receita.titulo}</h2>

                <p><strong>tempo de preparo:</strong> {receita.tempoPreparo} minutos.</p>

                <p style={estiloDificuldade}><strong>Dificuldade:</strong> {receita.dificuldade}.</p>

                <ul>
                    {receita.ingredientes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>Modo de preparo:</h3>
                <p>{receita.modoPreparo}</p>
            </div>
        </>
    )
}

ReactDOM.render(<RecipeCard />, document.getElementById('root'));