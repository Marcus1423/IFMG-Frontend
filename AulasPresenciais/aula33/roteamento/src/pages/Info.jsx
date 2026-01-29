import { useParams } from "react-router-dom";
import { useState } from "react";

function Info() {
    let name = useState()
    const { firstname } = useParams();
    return <h1>Hello, {firstname}!</h1>;
}

export default Info;