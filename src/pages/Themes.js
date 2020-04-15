import React from 'react';

import { Link } from 'react-router-dom';


function Themes() {


  return (
  <div style={{margin:'30px', textAlign:'center', fontSize:'100px', backgroundColor:'white'}}>
    <div style={{}}>
      <h1>Choose a theme</h1>
      <div style={{filter:'opacity(.9)' }}>
        <Link to='/grey-scale' > grey </Link>
        <Link to='/colorful'> color </Link>
      </div>
    </div>
  </div>
  );
}

export default Themes;