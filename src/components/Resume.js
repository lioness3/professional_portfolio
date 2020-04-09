import React from 'react';
import Pdf from './images/Resume.pdf'


function Resume() {
  return (
    <div>
        <a href = {Pdf} target = "_blank">Download My Resume</a>
    </div>
  );
}

export default Resume;
