import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Themes from '../pages/Themes';
import Name from './Name';
import Lion from './Lion';
import Footer from './Footer';
import Menu from './Menu';
import ColorfulPage  from '../pages/ColorfulPage'
import GreyPage  from '../pages/GreyPage'

import './App.css';

function App() {


  return (
    <div className="App">
         <Menu/> 
        
       <Switch>
      
         <Route  exact path='/' render={() => <MainPage/> } />
        <Route   exact path='/themes' render={()=> <Themes/>} />
        <Route   exact path='/colorful' render={()=> <ColorfulPage/>} />
        <Route   exact path='/grey-scale' render={()=> <GreyPage/>} />
       </Switch>
       
    </div>
  );
}

export default App;
