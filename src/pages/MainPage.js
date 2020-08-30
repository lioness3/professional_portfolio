import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';

import './MainPage.css'

import star from '../components/images/star.png'


function MainPage() {


  return (
    <div className="mainPage">
    
      <Menu/> 
     <div className='card'>
       <p>Download My App</p>
       
     </div>
    
      {/* <img src={star} className='star' alt='star' />
      <img src={star} className='star2' alt='star' />
      <img src={star} className='star3' alt='star' />
      <img src={star} className='star4' alt='star' />
      <img src={star} className='star5' alt='star' />
      <img src={star} className='star6' alt='star' />
      <img src={star} className='star7' alt='star' />
      <img src={star} className='star8' alt='star' />
      <img src={star} className='star9' alt='star' />
      <img src={star} className='starRight' alt='star' /> */}
  
    </div>
  );
}

export default MainPage;
