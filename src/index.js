import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

//Syntax......== array.map(function(currentValue,index,array),thisValue)
//remember map method needs a unique key . Keys are necessary to improve the performance of the react
//app
function ncard(val){

    return(
        <Card
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.links}
        />
    );
}

ReactDOM.render(
    <>
        <h1 className="heading_Style">List of top 5 Netflix Series in 2021</h1>
        {Sdata.map(ncard)}
    </>,
    document.getElementById("root")
);