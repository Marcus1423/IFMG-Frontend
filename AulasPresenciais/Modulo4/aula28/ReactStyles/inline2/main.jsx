const Header = () => {
const myStyle = {
color: "white",
backgroundColor: "DodgerBlue",
padding: "10px",
fontFamily: "Sans-Serif"
};

const styleh2 = {
    backgroundColor: "Red",
    color: "white",
    padding: "20px",
    textAlign: "center",
}
return (
<>
<h1 style={myStyle}>Hello Style!</h1>
<h2 style={styleh2}>Subtítulo</h2>
<p>Add a little style!</p>
</>
);
}

ReactDOM.render(<Header />, document.getElementById('root'));