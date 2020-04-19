import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Name from '../components/Name';
import './ColorfulPage.css'
import Footer from '../components/Footer';
import leaves from '../components/images/leafs.png'

import vine from '../components/images/vi.png'
function ColorfulPage() {


  return (
    <div className="colorfulPage">

        {/* ZOOM IN CLICK HERE TO LEARM MORE */}
{/* <img src={vine} alt='vine' className='vine'/>  */}
 <div className='zoomContainer'>
   <p className='zoomText'>CLICK TO LEARN ABOUT ME</p>

 </div>
    </div>
  );
}

export default ColorfulPage;