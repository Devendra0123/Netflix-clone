import React, { useState } from "react";
import Header from "./Header.js";
import TopContainer from "./topContainer.js";
import {imageOne, imageTwo, imageThree} from "./background.js";
import Rows from "./Row";
import request from "./request";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./SignIn.js";

function App(){
  const [background, setBackground] = useState();

  function swipeBackground(id){
    setBackground(id);
  }

   return (<Router>
   <div style={{background: "black"}}>
   <Header />
   <Switch>
     <Route path="/signIn">
        <SignIn />
     </Route>
     <Route path="/">
     <div
    style={{backgroundImage: 
         background==1 ? imageOne 
         :background==2 ? imageTwo
         : imageThree , backgroundAttachment: "fixed"
         }}
         className="topSection" >
     <TopContainer
       slide = {swipeBackground}
      />
   </div>
   <Rows title="Popular"  fetchURL={request.popular} />
   <Rows title="Upcoming"  fetchURL={request.upcoming} />
   <Rows title="Top Rated"  fetchURL={request.topRated} />
     </Route>
   </Switch>
  
   </div> 
   </Router>    
     );
}

export default App; 