import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";


ReactDOM.render(
    <>
    <h1 className="heading_Style">List of top 5 Netflix Series in 2021</h1>
    <Card
     imagesrc="https://wallpapercave.com/wp/wp4056410.jpg"
     title="A Netflix Original Series"
     sname="DARK"
     link="https://www.netflix.com/np/title/80100172"
    />
    <Card
    imagesrc="https://asianwiki.com/images/4/47/Human_Class-KDH.jpg"
    title="A Netflix Original Series"
    sname="EXTRA CURRICULAR "
    link="https://www.netflix.com/np/title/80990668"
    />
    <Card
    imagesrc="https://wallpapercave.com/wp/wp4056410.jpg"
    title="A Netflix Original Series"
    sname="DARK"
    link="https://www.netflix.com/np/title/80100172"
    />
  
    </>
    ,document.getElementById('root')

);