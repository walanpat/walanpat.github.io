import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import History from "./History";
  import Symbolism from "./Symbolism";
  import Sources from "./Sources";

  import "./index.css";
//Home
  //About me, about the discussion of what this is, BlackMarket/DeepWeb a little.  Talk about interests.

//History
  // The History of internet security and what not.  
  //Discuss the silk road, discuss Bitcoin and the other 

//Folklore/symbolism
  //Talk about what we actually need to talk about. 
  //Discuss the "What is it in the psyche/symbolistically/what it represents"

//Sources
  //informal bibliography, for the grad student and requirements.

//?????? Something else maybe?????  Not so sure, maybe a link to UNC RELI department or something just for the fun of it, or to my own github.
  //We will see what is discussed.


  //Schedule: 
  //
  //
  //Tuesday: Finish outline/drafted knowledge/content
  //Wednesday: format the css for the text
  //Thursday: Add graphics, properly CSS position wise the website (outside of the conntent maneuvering)
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>The Dark Web (informational site)</h1>
            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/history">History</NavLink></li>
              <li><NavLink to="/Symbolism">Folklore/Symbolism</NavLink></li>
              <li><NavLink to="/sources">Sources</NavLink></li>

            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/history" component={History}/>
              <Route path="/symbolism" component={Symbolism}/>
              <Route path="/sources" component={Sources}/>

            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;