import React from 'react';
import ReactDOM from "react-dom";
//we will further simplify our code and move our card component to seperate file..
//and use index next version...
function Card(props){
    //custom properties defined in the component iin our case card is received in props as object
    //so to access it we write props.propertyname...
    
    return(
  <>
    { <div className="cards">
      <div className="card">
        <img src={props.imagesrc} alt="myPic" className="card__img"/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
  
      </div>
    </div> }
    </>
    );
  }

  ReactDOM.render(
    
    <>

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