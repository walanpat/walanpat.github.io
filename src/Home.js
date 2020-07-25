import React, { Component } from "react";
import MyFace from './MyFace.jpg';
class Home extends Component {
  render() {
    return (
      <div>
        <h1 class="center">About Me</h1>

        <p>My name is William Alan Patterson II and I am a University of North Carolina 
          Chapel Hill student double majoring in Religion and Computer Science. I am still a student but I am also currently working for NHDev inc.</p>
          <div className="wrapperCenter"><img src={MyFace} className="img1"/></div>

          Note: This is focused on becoming a priest in the United States.  It varies from country to country but this is the standard path for someone in the U.S.

        <p>This is a website designed for the 2020 Summer Session 2 Modern Catholicism class taught 
          by Professor Evyatar Marienberg. 
          This version is published as of 7/24 at approxximately 11pm.  
           I've enjoyed the class greatly and despite the crunchtime of
          this incredibly condensed semester It's been a blast.
        </p>
        <p>Have a great summer Prof Marienberg!  I'll see you in the fall electronically or physically!</p>
      <br/>
      <h3>Contact Info</h3>
    
      <p>E-Mail: walanpat@live.unc.edu</p>
      <p>Github: https://github.com/walanpat </p>
      </div>
    );
  }
}
 
export default Home;