import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
    // <>
    //      <h1 className="heading_Style">List of top 5 Netflix Series in 2021</h1>
    //      {Sdata.map(function ncard(val){
    //          return(
    //             <Card
    //             imgsrc={val.imgscr}
    //             title={val.title}
    //             sname={val.sname}
    //             link={val.links}
    //             />
    //          );
    //      })}
    // </>

    //below is the implementation of anonymous inner function
    <>
    <h1 className="heading_Style">List of top 5 Netflix Series in 2021</h1>
        {Sdata.map((val,index)=>{
            console.log(index);
            return(
                    
                <Card
                    imgsrc={val.imgscr}
                    title={val.title}
                    sname={val.sname}
                    link={val.links}
                />
            );
        })}
    </>
    ,document.getElementById("root")
);

// //function declaration before ES6
// function myname(amit){

// }
// // function declaration after ES6
// const myname = (amit)=>{

// }

// const myname=(a,b)=>{
//     return a+b;
// }
// const myname = (a,b)=> a+b;