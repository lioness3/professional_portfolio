import React, {useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { AiFillCloseCircle, AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import '../components/Menu.css';
import { AiFillGithub, AiFillLinkedin, AiFillHome } from 'react-icons/ai';
import { MdEmail, MdCall, MdSms, MdInfo } from 'react-icons/md';
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
import volcano from '../components/images/volcano.jpeg'
import catInVan from '../components/images/catInVan.jpeg'
import workingCat from '../components/images/workingCat.jpeg'
import peace from '../components/images/peace.jpeg'
import nebraska from '../components/images/nebraska.jpeg'
function About() {

const [displayMentionables, setDisplayMentionables] = useState('infoHidden')
const [displayFavorites, setDisplayFavorites] = useState('infoHidden')
const [displayAdventures, setDisplayAdventures]= useState('infoHidden')
const [displayHobbies, setDisplayHobbies] = useState('infoHidden')
const [display, setDisplay]= useState(null)
const [contactInfo, setContactInfo] = useState(null)
const [emailColor, setEmailColor] = useState('black')
const [factColor, setFactColor] = useState('white')
const [skillColor, setSkillColor] = useState('white')
const [favColor, setFavColor] = useState('white')
const [adventureColor, setAdventureColor] = useState('white')
const [hobbyColor, setHobbyColor] = useState('white')
const [catColor, setCatColor] = useState('white')

const show = (  <div className='contactInfo'>
                  <a href="tel:+16035665610"><MdCall/> Call</a> 
                  <a href="sms://+16035665610"><MdSms/> Text</a> 
                  <a href="mailto: joann333carter@gmail.com"><MdEmail/> Email</a>
                 </div>)


const showContactInfo = () =>{
 
  if (contactInfo === null){
    setContactInfo(show)
  }else {
    setContactInfo(null)
  }
  
}
const handleIconColor = ( icon, setIcon)=>{
 let iconColor =  (icon === 'black')? 'rgba(93,130,73,.5  )': 'black'
  setIcon(iconColor)
}
const handleDisplay=(content)=>{
  setDisplay(content)
  }
  const handleWordColor = (word, setWord)=>{
    let wordColor =  (word === 'white')? 'rgb(165,204,95)': 'white'
     setFactColor('white')
     setSkillColor('white')
     setFavColor('white')
     setAdventureColor('white')
     setHobbyColor('white')
     setCatColor('white')
       setWord(wordColor)
     }



  


const fav=(
  <div className='content'>
    <div  onClick={()=>{
      handleDisplay(null);setFavColor('white') 
    }}> <p className='closeView'><AiFillCloseCircle/></p></div>
    <p className='banner'>FAVORITES</p>
   
    <p className='pizza'>Pizza <span className='pizzaEmoji'>🍕</span></p>
    <p className='iceCream'>Ice Cream <span className='iceCreamEmoji'>🍦</span></p>
    <p className='tacos'>Tacos <span className='tacosEmoji'>🌮</span> </p>
    <p className='puzzles'>Puzzles <span className='puzzlesEmoji'>🧩</span></p>
    <p className='family'>Family <span className='familyEmoji'>👨‍👩‍👧</span></p>
    <p className='raceCar'>Race Cars <span className='raceCarEmoji'>🏎</span></p>
    <p className='crafts'>Crafts <span className='craftsEmoji'>🧶</span></p>
    <p className='nature'>Nature <span className='natureEmoji'>🌻</span></p>
    
  </div>)


const skills = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null);setSkillColor('white')
    }}><AiFillCloseCircle/></div>
    <p className='banner'>SKILLS</p>
    <p>Full Stack Development</p>
    <p>Pair Programming</p>
    <p>User Experiance </p>
    <p>Web and Mobile Design</p>
    <p>Customer Service</p>
    <p>Team Player</p>
    <p>Flexible</p>
    <p>Hard Working</p>
    <p>Motivated</p>

  </div>
)
const funFacts = (
  <div className='content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null);setFactColor('white')
    }}><AiFillCloseCircle/></div>
    <p className='banner'>FUN FACTS</p>
    <p>Ham Radio Operator</p>
    <p>Licensed Manicurist</p>
    <p>Sig Sauer Training</p>
    <p>Van Life</p>
    <p>Racing Cars</p>
  </div>
)
const adventures = (
  <div className='detailedContent content' >  
    <div className='closeView' onClick={()=>{
      handleDisplay(null); setAdventureColor('white')
    }}><AiFillCloseCircle/></div>
    <p className='banner'>ADVENTURES</p>
    <p className='caption'>I travel with the cutest co pilot, Shadow(see more cat pictures in the 'MY CAT' section). </p>
    <img src={coPiolit} className='coPiolit' alt='cat image'/>
    <p className='caption'>I love to explore and see all that nature has to offer.</p>
    <img src={Niagra} className='niagra' alt='image'/>
    <img src={hike} alt='image'/>
    <img src={cliff} alt='image of edge of cliff'/>
    <img src={volcano} alt='image of scenery'/>
    <img src={nebraska} alt='image of scenery'/>
  
  </div>
)
const crafts =(

  <div className='detailedContent content'>
    <div className='closeView' onClick={()=>{
      handleDisplay(null);setHobbyColor('white')
    }}><AiFillCloseCircle/></div>
    <p className='banner'>HOBBIES</p>
    <p className='caption'>For self-care, I am most relaxed when in nature.</p> 
    <img src={beach} alt='image'/>
    <img src={peace} alt='image of scenery'/>
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
    handleDisplay(null);setCatColor('white')
  }}><AiFillCloseCircle/></div>
  <p className='banner'>PICTURES OF MY CAT</p>
  <img src={shadow} className='shadow' alt='shadow'/>
  <img src={catStretched}  alt='shadow'/>
  <img src={workBuddy} alt='image of cat'/>
  <img src={canyonCat} alt='image of cat'/>
  <img src={catInVan} alt='image of a van and a cat'/>
  <img src={workingCat} alt='image of a van and a cat'/>
</div>
)

  return (
    <div className="About" >



      <div className="menu">
        <div className='option' >
 
          <Link to='/' className='icon'><AiFillHome/></Link>
          <p className='description'>Back</p>
        </div>

        <div className='option'onClick={()=>{handleIconColor(emailColor, setEmailColor); showContactInfo()}} >
       
          <span className='icon' style={{color: `${emailColor}`}} ><MdEmail/></span>
          <p className='description'>Contact</p>
        </div>
      {contactInfo}
        <div className="option" >
          <a href='https://github.com/lioness3' rel="noopener noreferrer" target = "_blank" className='icon' ><AiFillGithub/></a>
          <p className="description">GitHub</p>
       </div>
       <div className="option" >
         <a href='https://www.linkedin.com/in/joann-carter/' rel="noopener noreferrer" target = "_blank" className='icon' ><AiFillLinkedin/></a>
         <p className="description">LinkedIn</p>
       </div>

      </div>




      
        <div className='titleCol' >
          <div className='leftArrow'>
            <AiOutlineDoubleLeft/>
          </div>
          
          <div className='title' onClick={()=>{handleDisplay(funFacts); handleWordColor(factColor, setFactColor)}}>
            <p style={{color: `${factColor}`}}>FUN FACTS</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(skills);handleWordColor(skillColor, setSkillColor)}}>
            <p style={{color: `${skillColor}`}}>SKILLS</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(fav);handleWordColor(favColor, setFavColor)}}>
            <p style={{color: `${favColor}`}}>FAVORITES</p>
          </div>  
          <div className='title' onClick={()=>{handleDisplay(adventures);handleWordColor(adventureColor, setAdventureColor)}}>
            <p style={{color: `${adventureColor}`}}>ADVENTURES</p>
          </div>  
          <div className='title' onClick={()=>{handleDisplay(crafts);handleWordColor(hobbyColor, setHobbyColor)}}>
            <p style={{color: `${hobbyColor}`}}>HOBBIES</p>
          </div> 
          <div className='title' onClick={()=>{handleDisplay(cat);handleWordColor(catColor, setCatColor)}}>
            <p style={{color: `${catColor}`}}>MY CAT</p>
          </div> 
     
          
          <div className='rightArrow'>
            <AiOutlineDoubleRight/>
          </div>
         
        </div>
        <div className='changeableContent'>
          {display}
        </div>
        <Link to='/' className='homeLink'>Joann Carter</Link>
     </div>

  );
}

export default About;