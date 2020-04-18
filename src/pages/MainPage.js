import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Name from '../components/Name';
import './MainPage.css'
import Footer from '../components/Footer';
import leaves from '../components/images/leafs.png'
import leaf from '../components/images/leaf.png'


function MainPage() {


  return (
    <div className="mainPage">
              <img src={leaves} className='leaves' alt='leaves'/>
              <img src={leaf} className='leaf' alt='leaf'/>
         <Name/>
        <Footer />
    </div>
  );
}

export default MainPage;
