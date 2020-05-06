import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Mailto from 'react-protected-mailto';

function Contact(){
    return (
<div>
    
    <Mailto tel='6035665610'/>
    <Link path='/'>home</Link>
    <p>Want to provide feedback on my site? 'id love to hear your thoughts! click below to message me your thoughst directly.</p>
</div>
   )
}
export default Contact