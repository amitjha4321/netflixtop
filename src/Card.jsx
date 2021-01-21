import React from 'react';
import Heading from './Heading';
import Images from './Images';
//note1 we are not importing ReactDOM here as we dont need to render here
//note2 we are still using functional component...
function Card(props){
   
    
    return(
  <>
    { <div className="cards">
      <div className="card">
        <Images imgsrc={props.imgsrc}/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <Heading sname={props.sname}/>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
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