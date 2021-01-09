import React from 'react';
import ReactDOM from "react-dom";

//in this we are using functional component lateer somewhere we will use class component...
//always first letter of the function should be in capital...
function Card(){
<>
  { <div className="cards">
    <div className="card">
      <img src="https://wallpapercave.com/wp/wp4056410.jpg" alt="myPic" className="card__img"/>
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
}

ReactDOM.render(
  <Card/>,document.getElementById('root')
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