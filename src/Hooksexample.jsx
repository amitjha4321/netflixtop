import React, { useState } from "react";
import "./index.css";



const Hooksexample= ()=>{

    const state= useState();
    //  let count=1;
    const[count,setCount]=useState(0);

    const IncNum=()=>{
        //console.log('clicked');
        //setCount(100);
        setCount(count+1);
    };

    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me!</button>
        </>
    );
}

export default Hooksexample;