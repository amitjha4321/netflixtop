import React from 'react';
//note1 we are not importing ReactDOM here as we dont need to render here
//note2 we are still using functional component...
function Card(props){
   
    
    return(
  <>
    { <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card__img"/>
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
  export default Card;
  //to use this component in other js file we must export it so that it can be used in other class
  // Card vs Card(); Card() will call the function here we are not calling it REMEMBER!!!