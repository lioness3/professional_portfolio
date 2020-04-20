import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Name from '../components/Name';
import './MainPage.css'
import Footer from '../components/Footer';
import leaves from '../components/images/leafs.png'
import leaf from '../components/images/leaf.png'
import lion from '../components/images/lion.png'

function MainPage() {


  return (
    <div className="mainPage">
      <Menu/> 
      {/* <img src={leaves} className='stillLeaves' alt='stillLeaves'/> */}
              <img src={leaves} className='leaves' alt='leaves'/>
              <img src={leaf} className='leaf' alt='leaf'/>
              <img src={lion} className='lion' alt='lion'/>
         <Name/>
        <Footer />
    </div>
  );
}

export default MainPage;
