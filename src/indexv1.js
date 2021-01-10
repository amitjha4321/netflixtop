import React from 'react';
import ReactDOM from "react-dom";

// for more optimezed version go to other version of index.js

//in this we are using functional component later somewhere we will use class component...
//always first letter of the function should be in capital...
function Card(props){
  //our custom defined properties in our component ,as shown below in the commented card,
  //is passed to the component via props argument...
  //and can be accecssed by props.imagesrc,props.link, etc
  return(
<>
  { <div className="cards">
    <div className="card">
      {/* properties can be accessed props.imagesrc like shown used below */}
      <img src={props.imagesrc} alt="myPic" className="card__img"/>
      <div className="card__info">
        <span className="card__category">A Netflix Original Series</span>
        <h3 className="card_title">DARK</h3>
        <a href="https://www.netflix.com/np/title/80100172" target="_blank">
          <button>Watch Now</button>
        </a>
      </div>

    </div>
  </div> }
  </>
  );
}

ReactDOM.render(
  //the problem here is we want different properties and attributes for our other cards so props
  //comes in to the picture here...
  //so basically props is defining our own custom properties in our component...
  <>
  
  
  {/* our own custom properties can be defined in this fashion also but again this becomes hectic
   <Card
  imagesrc="https://wallpapercave.com/wp/wp4056410.jpg"
  title="A Netflix Original Series"/>
  sname='Dark' 
  link='https://www.netflix.com/np/title/80100172'
  */}
  
  <Card
   imagesrc="https://wallpapercave.com/wp/wp4056410.jpg"
  />
  <Card/>

  </>
  ,document.getElementById('root')
  // <>
  // {/* <div className="cards">
  //   <div className="card">
  //     <img src="https://wallpapercave.com/wp/wp4056410.jpg" alt="myPic" className="card__img"/>
  //     <div className="card__info">
  //       <span className="card__category">A Netflix Original Series</span>
  //       <h3 className="card_title">DARK</h3>
  //       <a href="https://www.netflix.com/np/title/80100172" target="_blank">
  //         <button>Watch Now</button>
  //       </a>
  //     </div>

  //   </div>
  // </div> */}
  // {/* <input type='text' value='amit'></input> */}

  // </>, document.getElementById('root')
);