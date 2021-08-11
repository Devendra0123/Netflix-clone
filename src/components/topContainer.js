import React, { useState } from "react";


function TopContainer(props){
  const [isClicked, setIsclicked] = useState("");
  

  function handleClick(event){
    const id = event.target.id;
    props.slide(id); 
    setIsclicked(id);
  }

  return(<div className="topContainer">
    <div className="infoDiv">
        <h1>Cocktail</h1>
        <p>2012 | 2 hr 24 min</p>
        <p>Cocktail is a Hindi rom-com movie based on a love triangle between Gautam <br/>(Saif Ali Khan), Veronica (Deepika Padukone) &...</p>
        <button><i className="fa fa-heart" aria-hidden="true"></i> Watch Now</button>
        <button><i className="fa fa-random" aria-hidden="true"></i> Watchlist</button>
    </div>
    <div className="slider">
        <button id="1" type="button" onClick={handleClick}
         style={{backgroundColor: isClicked==1 ?"olive": null}}>
         </button>
        <button id="2" type="button" onClick={handleClick}
         style={{backgroundColor: isClicked==2 ?"olive": null}}>
         </button>
        <button id="3" type="button" onClick={handleClick}
         style={{backgroundColor: isClicked==3 ?"olive": null}}>
         </button>
    </div>
    <div className="empty" />
  </div>);
}

export default TopContainer;