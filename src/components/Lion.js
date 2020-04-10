import React from 'react';



function Lion() {
  return (
    <div className="Lion" style={{}}>
      <svg width="600" height="600">
     
         <polyline points="100 0,300 200,"
          style={{stroke:'yellow',strokeWidth:'4'}}
       />
      </svg>
    </div>
  );
}

export default Lion;
/* <circle cx="250" cy="250" r="100" stroke="green" stroke-width="4" fill="yellow" />
<circle cx="250" cy="250" r="100" fill="#fff" />
<circle cx="250" cy="250" r="100" fill="purple" />
<circle cx="340" cy="160" r="30" fill="purple" />
<circle cx="160" cy="160" r="30" fill="purple" />
<polyline points="250,160 200,40 40,80 80,80 80,120 120,120 120,160"
style={{stroke:'brown',strokeWidth:'4'}}
/> */