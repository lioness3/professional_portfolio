import React from 'react';
import './styles.css';

import Pdf from './Resume.pdf'


function Footer() {

  return (
  <div className="footer">
    <a href = {Pdf} target = "_blank">Download My Resume</a>

  </div>
  );
}

export default Footer;
