import React from "react";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";
import Hooksexample from "./Hooksexample";

function App() {
  return (
    <>
    <Hooksexample/>
    <h1 className="heading_Style">List of top 5 Netflix Series in 2021</h1>
        {Sdata.map((val,index)=>{
            console.log(index);
            return(
              
              
                    
                <Card
                    key={val.id}
                    imgsrc={val.imgscr}
                    title={val.title}
                    sname={val.sname}
                    link={val.links}
                />
               
            );
        })}
    </>
  );
}

export default App;
