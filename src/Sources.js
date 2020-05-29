import React, { Component } from "react";

class Sources extends Component {
    //H2 is our bigger text block, title style
            //More than likely will be the "title" of any such source used

    // p will be our body text to anything that goes on.
            //Informationon how to find the source, and other information regarding how to access such things will be listed here.

        
  render() {
    return (
      <div>
        <h1 class="center">Sources</h1>
        <h2>History of the internet</h2>
       
        <br></br>
        <li><sup>1</sup>https://www.internetsociety.org/internet/history-internet/brief-history-internet/</li>
        <li><sup>2</sup>https://www.aclu.org/issues/free-speech/internet-speech</li>
        <li><sup>3</sup>https://time.com/5770755/threat-free-speech-online/</li>

        <br></br>
        <h2>Scholarly Articles</h2>
        <li><sup>4</sup>https://link.springer.com/article/10.1057/s41284-018-0150-5</li>
        <li><sup>5</sup>https://journals.sagepub.com/doi/pdf/10.1177/1461444814554900</li>
        <li><sup>6</sup>https://fas.org/sgp/crs/misc/R44101.pdf        </li>
        <li><sup>7</sup>https://www.researchgate.net/publication/239440978_White_Paper_The_Deep_Web_Surfacing_Hidden_Value</li>
        <li><sup>8</sup>https://www.tandfonline.com/doi/abs/10.1080/15295036.2016.1243249?src=recsys&journalCode=rcsm20</li>
        <li><sup>9</sup>https://www.tandfonline.com/doi/full/10.1080/23738871.2016.1228990</li>
        
        <br></br>
        <h2>Other Sources</h2>
        <li><sup>9</sup>https://www.scientificamerican.com/article/illuminating-the-dark-web/</li>
        <li><sup>10</sup>https://www.wired.com/2015/06/dark-web-know-myth/</li>
        <li><sup>11</sup>http://lab.cccb.org/en/the-dark-web-between-the-myth-and-the-promise-of-anonymity/</li>
        <li><sup>12</sup>https://www.newscientist.com/article/2126472-trackers-could-unmask-dark-web-users-who-think-theyre-anonymous/</li>

      </div>
    );
  }
}
 
export default Sources;