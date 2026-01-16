import { useState } from "react"

function Color() {
    const [color, setColor] = useState("red");
    return (
        <>
        return <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor("blue")}
        
        >Blue</button>
        </>
    )
    

}

export default Color