const MyHeader = styled.h1`
padding: 10px 20px;
background-color: #007bff;
color: white;
text-align: center;
`;

const MySubtitle = styled.h2`
padding: 10px 20px;
background-color: red;
color: white;
text-align: center;
`;

function App() {
return (
<>
<MyHeader>Welcome!</MyHeader>
<MySubtitle>My subtitle</MySubtitle>
</>
);
}

ReactDOM.render(<App />, document.getElementById('root'));