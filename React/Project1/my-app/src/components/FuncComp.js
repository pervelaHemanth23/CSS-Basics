import React from "react"

function FuncComp(props){
    return(
        <div>
            <h1>Hello Worldie</h1>
            <p>Lets have some fun</p>
            <h1>{props.name}</h1>
            <h2>{props.profession}</h2>
            <h2>{props.age}</h2>
        </div>
    );
}

export default FuncComp;