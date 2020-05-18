import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainPage from '../pages/MainPage';

import ColorfulPage  from '../pages/ColorfulPage';





function App() {


  return (
    <div className="App">
           
       <Switch>
        <Route  exact path='/' render={() => <MainPage/> } />
        <Route  exact path='/about' render={()=> <ColorfulPage/>} />
      
       </Switch>
  
    </div>

  );
}

export default App;
