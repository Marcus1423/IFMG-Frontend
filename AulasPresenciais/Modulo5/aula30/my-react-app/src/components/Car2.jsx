function Car2(props) {

    const {brand, model, color, year} = props;

    return (
        <h2>I love my {brand} {color} {model} {year}!</h2>
    );
}

export default Car2