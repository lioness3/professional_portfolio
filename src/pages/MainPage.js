import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';

import './MainPage.css'
import Footer from '../components/Footer';
import leaves from '../components/images/leafs.png'
import leaf from '../components/images/leaf.png'
import lion from '../components/images/lion.png'
import star from '../components/images/star.png'
import stars from '../components/images/stars.png'

function MainPage() {


  return (
    <div className="mainPage">
    
      <Menu/> 
    
      <img src={star} className='star' alt='star' />
      <img src={star} className='star2' alt='star' />
      <img src={star} className='star3' alt='star' />
      <img src={star} className='star4' alt='star' />
      <img src={star} className='star5' alt='star' />
      <img src={star} className='star6' alt='star' />
      <img src={star} className='star7' alt='star' />
      <img src={star} className='star8' alt='star' />
      <img src={star} className='star9' alt='star' />
      <img src={star} className='starRight' alt='star' />
  
    </div>
  );
}

export default MainPage;
