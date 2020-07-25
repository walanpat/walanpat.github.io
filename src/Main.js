import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import History from './History';
import Symbolism from './Symbolism';
import Sources from './Sources';
import Sauces from './Sources2';

import './index.css';
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
          <h1 className='center'>Ordination in the Catholic Church</h1>
          <ul className='header'>
            <li>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/pathtopriesthood'>Path to Priesthood</NavLink>
            </li>
            <li>
              <NavLink to='/ordination'>Ordination Ceremony</NavLink>
            </li>
            {/* <li><NavLink to="/sources">Priesthood</NavLink></li> */}
            <li>
              <NavLink to='/sauces'>Sources</NavLink>
            </li>
          </ul>
          <div className='content'>
              
            <Route exact path='/' component={Home} />
            <Route path='/pathtopriesthood' component={History} />
            <Route path='/ordination' component={Symbolism} />
            <Route path='/sources' component={Sources} />
            <Route path='/sauces' component={Sauces} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
