import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { AiFillCloseCircle, AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import {  RiArrowLeftSLine, RiArrowRightSLine  } from 'react-icons/ri';
import './About.css'
import catStretched from '../components/images/catStretched.jpeg'
import shadow from '../components/images/shadow.jpeg'
import van from '../components/images/van.jpeg'
import canyonCat from '../components/images/canyonCat.jpeg'
import workBuddy from '../components/images/workBuddy.jpeg'
import cliff from '../components/images/cliff.jpeg'
import hike from '../components/images/hike.jpeg'
import coPiolit from '../components/images/coPiolit.jpeg'
import beach from '../components/images/beach.jpeg'
import waterfallAdventure from '../components/images/waterfallAdventure.jpeg'
import Niagra from '../components/images/Niagra.jpeg'
import craft from '../components/images/craft.jpeg'

function About() {

const [displayMentionables, setDisplayMentionables] = useState('infoHidden')
const [displayFavorites, setDisplayFavorites] = useState('infoHidden')
const [displayAdventures, setDisplayAdventures]= useState('infoHidden')
const [displayHobbies, setDisplayHobbies] = useState('infoHidden')
const [display, setDisplay]= useState(null)

const showMentionablesInfo = ()=>{
  if (displayMentionables === 'infoHidden'){
    setDisplayMentionables('info')
  }else{
    setDisplayMentionables('infoHidden')
  }
  
}
const showFavoritesInfo = ()=>{
  if (displayFavorites === 'infoHidden'){
    setDisplayFavorites('info')
  }else{
    setDisplayFavorites('infoHidden')
  }
  
}
const showAdventuresInfo = ()=>{
  if (displayAdventures === 'infoHidden'){
    setDisplayAdventures('stories')
  }else{
    setDisplayAdventures('infoHidden')
  }
  
}
const showHobbiesInfo = ()=>{
  if (displayHobbies === 'infoHidden'){
    setDisplayHobbies('stories')
  }else{
    setDisplayHobbies('infoHidden')
  }
  
}

const fav=(
  <div className='content'>
    <div  onClick={()=>{
      handleDisplay(null)
    }}> <p className='closeView'><AiFillCloseCircle/></p>
    <p className='banner'>FAVORITES</p></div>
   
    <p className='pizza'>Pizza <span className='pizzaEmoji'>🍕</span></p>
    <p className='iceCream'>Ice Cream <span className='iceCreamEmoji'>🍦</span></p>
    <p className='puzzles'>Puzzles <span className='puzzlesEmoji'>🧩</span></p>
    <p className='tacos'>Tacos <span className='tacosEmoji'>🌮</span> </p>
    <p className='family'>Family <span className='familyEmoji'>👨‍👩‍👧</span></p>
    <p className='raceCar'>Race Cars <span className='raceCarEmoji'>🏎</span></p>
    <p className='crafts'>Crafts <span className='craftsEmoji'>🧶</span></p>
  </div>)
const interests = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}><AiFillCloseCircle/></div>
    <p className='banner'>CAREER INTERESTS</p>
    <p >Front End Development</p>
    <p>UI Design</p>
    <p>UX Design</p>
  </div>
)
const languages = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}><AiFillCloseCircle/></div>
    <p className='banner'>LANGUAGES</p>
    <p>React</p>
    <p>React Native</p>
    <p>Ruby </p>
    <p>Rails</p>
    <p>Ionic</p>
  </div>
)
const skills = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}><AiFillCloseCircle/></div>
    <p className='banner'>SKILLS</p>
    <p>Pair Programming</p>
    <p>User Experiance </p>
    <p>Web and Mobile Design</p>
    <p>Customer Service</p>
  </div>
)
const funFacts = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}><AiFillCloseCircle/></div>
    <p className='banner'>FUN FACTS</p>
    <p>Ham Radio Operator</p>
    <p>Licensed Manicurist</p>
    <p>Sig Sauer Training</p>
    <p>Van Life</p>
  </div>
)
const adventures = (
  <div className='detailedContent content' >  
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}><AiFillCloseCircle/></div>
    <p className='banner'>ADVENTURES</p>
    <p className='caption'>I often travel with the cutest co pilot, Shadow( see more cat pictures in the 'MY CAT' section). </p>
    <img src={coPiolit} className='coPiolit' alt='cat image'/>
    <p className='caption'>I love to explore and see all that nature has to offer.</p>
    <img src={Niagra} className='niagra' alt='image'/>
    <img src={hike} alt='image'/>
    <img src={cliff} alt='image of edge of cliff'/>
  
  </div>
)
const crafts =(

  <div className='detailedContent content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null)
    }}><AiFillCloseCircle/></div>
    <p className='banner'>HOBBIES</p>
    <p className='caption'>For self-care, I am most relaxed when in nature.</p> 
    <img src={beach} alt='image'/>
    <p className='caption'>I achieve a great sense of acomplishment when I am able to create crafts out of recycled material. </p>
    <img src={craft} className='craft' alt='craft image' /> 
    <p className='caption'>In my free time, I find myself drawn to all things related to customization.</p>
    <p className='caption'> Currently, I am renovating a camper van as I discover the hidden treasures of our beautiful country.</p>
    <img src={van} alt='image of a van'/>
  </div>
)
const cat=(
  <div className='detailedContent content' >  
  <div className='closeView' onClick={()=>{
    handleDisplay(null)
  }}><AiFillCloseCircle/></div>
  <p className='banner'>PICTURES OF MY CAT</p>
  <img src={shadow} className='shadow' alt='shadow'/>
  <img src={catStretched}  alt='shadow'/>
  <img src={workBuddy} alt='image of cat'/>
  <img src={canyonCat} alt='image of cat'/>
</div>
)
const handleDisplay=(content)=>{
setDisplay(content)
}
  return (
    <div className="About" >
 
        <Link to='/' className='homeLink'>Joann Carter</Link>
        <div className='titleCol' >
        <div className='leftArrow'><AiOutlineDoubleLeft/></div>
          
          <div className=' title' onClick={()=>{handleDisplay(languages)}}>
            <p>LANGUAGES</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(funFacts)}}>
            <p>FUN FACTS</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(skills)}}>
            <p>SKILLS</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(fav)}}>
            <p>FAVORITES</p>
          </div>  
          <div className='title' onClick={()=>{handleDisplay(adventures)}}>
            <p>ADVENTURES</p>
          </div>  
          <div className='title' onClick={()=>{handleDisplay(crafts)}}>
            <p>HOBBIES</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(cat)}}>
            <p>MY CAT</p>
          </div> 
     
          
          <div className='rightArrow'><AiOutlineDoubleRight/></div>
         
        </div>
        <div className='changeableContent'>
          {display}
        </div>
     </div>

  );
}

export default About;