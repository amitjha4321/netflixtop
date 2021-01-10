import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";
// in this ver sion we are simplifiying even more with the use of array defined in Sdata.jsx
console.log(Sdata[0].imgscr);
ReactDOM.render(
    <>
        <Card
        imgsrc={Sdata[0].imgscr}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].links}
        />

<Card
        imgsrc={Sdata[1].imgscr}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].links}
        />
    </>,
    document.getElementById("root")
);
