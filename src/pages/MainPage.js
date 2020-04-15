import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Name from '../components/Name';
import './MainPage.css'
import Footer from '../components/Footer';


function MainPage() {


  return (
    <div className="mainPage">
         <Name/>
        <Footer />
    </div>
  );
}

export default MainPage;
