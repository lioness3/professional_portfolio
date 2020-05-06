import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainPage from '../pages/MainPage';

import ColorfulPage  from '../pages/ColorfulPage';
import Contact  from '../pages/Contact';


import './App.css';

function App() {


  return (
    <div className="App">
           
       <Switch>
        <Route  exact path='/' render={() => <MainPage/> } />
        <Route  exact path='/about' render={()=> <ColorfulPage/>} />
        <Route  exact path='/contact' render={()=> <Contact/>} />
       </Switch>
  
    </div>

  );
}

export default App;
