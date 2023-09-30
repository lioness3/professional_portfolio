import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle, AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import { AiFillGithub, AiFillLinkedin, AiFillHome } from 'react-icons/ai';
import { MdEmail, MdCall, MdSms, MdInfo } from 'react-icons/md';
import './About.css'
import '../components/Menu.css';
import catStretched from '../components/images/catStretched.jpeg'
import shadow from '../components/images/shadow.jpeg'
import van from '../components/images/van.jpeg'
import canyonCat from '../components/images/canyonCat.jpeg'
import workBuddy from '../components/images/workBuddy.jpeg'
import cliff from '../components/images/cliff.jpeg'
import hike from '../components/images/hike.jpeg'
import coPiolit from '../components/images/coPiolit.jpeg'
import beach from '../components/images/beach.jpeg'
import Niagra from '../components/images/Niagra.jpeg'
import craft from '../components/images/craft.jpeg'
import volcano from '../components/images/volcano.jpeg'
import catInVan from '../components/images/catInVan.jpeg'
import workingCat from '../components/images/workingCat.jpeg'
import peace from '../components/images/peace.jpeg'
import nebraska from '../components/images/nebraska.jpeg'
import me from '../components/images/me.jpeg'
import vanBuild1 from '../components/images/vanBuild1.jpeg'
import vanBuild2 from '../components/images/vanBuild2.jpeg'
import vanBuild3 from '../components/images/vanBuild3.jpeg'
import vanBuild4 from '../components/images/vanBuild4.jpeg'
import vanBuild5 from '../components/images/vanBuild5.jpeg'
import vanBuild6 from '../components/images/vanBuild6.jpeg'
import vanBuild7 from '../components/images/vanBuild7.jpeg'
import vanBuild8 from '../components/images/vanBuild8.jpeg'
import vanBuild9 from '../components/images/vanBuild9.jpeg'

import vanBuild10 from '../components/images/vanBuild10.jpeg'

function About() {


const [display, setDisplay]= useState(null)
const [contactInfo, setContactInfo] = useState(null)
const [emailColor, setEmailColor] = useState('black')


const scroll = useRef(null)
const titleScroll = useRef(null)
const introPicture = useRef(null)

const show = (  <div className='contactInfo'>
                  <a href="tel:+16035665610"><MdCall/> Call</a> 
                  <a href="sms://+16035665610"><MdSms/> Text</a> 
                  <a href="mailto: joann333carter@gmail.com"><MdEmail/> Email</a>
                 </div>)

// show contact info when icon is clicked
const showContactInfo = () =>{
  if (contactInfo === null){
    setContactInfo(show)
  }else {
    setContactInfo(null)
  } 
}

// change icon color when icon is clicked 
const handleIconColor = ( icon, setIcon)=>{
 let iconColor =  (icon === 'black')? 'rgba(93,130,73,.5 )': 'black'
  setIcon(iconColor)
}


// show content at top of scroll view when word is clicked 
const handleDisplay=(content)=>{

 if(display){
 
  scroll.current.scrollTop = 0
  setDisplay(content)

  }else{

    setDisplay(content)
  }
 }



const fav=(
  <div className='content' ref={scroll}>
    <div className='closeView' onClick={()=>{
        handleDisplay(null); 
      }}> 
      <AiFillCloseCircle/>
    </div>
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
  <div className='content'ref={scroll}>
   <div className='closeView' onClick={()=>{
        handleDisplay(null); 
      }}> 
      <AiFillCloseCircle/>
    </div>
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
  <div className='content' ref={scroll}>
    <div className='closeView' onClick={()=>{
        handleDisplay(null); 
      }}> 
      <AiFillCloseCircle/>
    </div>
    <p>Ham Radio Operator</p>
    <p>Licensed Manicurist</p>
    <p>Sig Sauer Training</p>
    <p>Van Life</p>
    <p>Racing Cars</p>
  </div>
)
const adventures = (
  <div className='detailedContent content' ref={scroll}>  
    <div className='closeView' onClick={()=>{
        handleDisplay(null); 
      }}> 
      <AiFillCloseCircle/>
    </div>
    <p className='caption'>Hiking in Oregon.</p> 
    <img src={hike} alt='image'/>
    <p className='caption'>Niagara Falls, NY.</p> 
    <img src={Niagra} className='niagra' alt='image'/>
    <p className='caption'>Northern California.</p> 
    <img src={cliff} alt='image of edge of cliff'/>
    <p className='caption'>Mount Hood, Oregon.</p> 
    <img src={volcano} alt='image of scenery'/>
    <p className='caption'>Camping in Nebraska.</p> 
    <img src={nebraska} alt='image of scenery'/>
  
  </div>
)
const vanBuild = (
  <div className='detailedContent content' ref={scroll}>  
    <div className='closeView' onClick={()=>{
        handleDisplay(null); 
      }}> 
      <AiFillCloseCircle/>
    </div>
    <p className='caption'>I bought a used cargo van</p> 
    <img src={vanBuild1} alt='first step'/>
    <img src={vanBuild2} alt='second step'/>
    <p className='caption'>It was full of screws and grease!</p> 
    <img src={vanBuild3} alt='third step'/>
    <img src={vanBuild4} alt='fourth step'/>
    <p className='caption'>It needed a deep clean!</p> 
    <img src={vanBuild5} alt='fifth step'/>
    <p className='caption'>We cut a hole for a window and Ceiling vent.</p> 
    <img src={vanBuild6} alt='sixth step'/>
    <p className='caption'>Then came the floor, ceiling, bed platform and battery power.</p> 
    <img src={vanBuild7} alt='seventh step'/>
    <img src={vanBuild8} alt='eighth step'/>
    <img src={vanBuild9} alt='nineth step'/>
    <p className='caption'>All the hard work was worth it!</p> 
    <img src={vanBuild10} alt='tenth step'/>
  </div>
)

const hobbies =(

  <div className='detailedContent content' ref={scroll}>
    <div className='closeView' onClick={()=>{
        handleDisplay(null); 
      }}> 
      <AiFillCloseCircle/>
    </div>
     <p className='caption'>For self-care, I recharge in nature.</p> 
    <img src={beach} alt='image'/>
    <img src={peace} alt='image of scenery'/>
    <p className='caption'>I achieve a great sense of acomplishment when I am able to create crafts out of recycled material. </p>
    <img src={craft} className='craft' alt='craft image' /> 
    <p className='caption'>In my free time, I find myself drawn to all things related to customization. Recently, I renovated a camper van to discover the hidden treasures of our beautiful country.</p>
    <img src={van} alt='image of a van'/>
  </div>
)
const cat=(
  <div className='detailedContent content' ref={scroll}>  
    <div className='closeView' onClick={()=>{
        handleDisplay(null); 
      }}> 
      <AiFillCloseCircle/>
    </div>
    <p className='caption'>I travel with the cutest co pilot. </p>
    <img src={coPiolit} className='coPiolit' alt='cat image'/>
    <img src={shadow} className='shadow' alt='shadow'/>
    <img src={catStretched}  alt='shadow'/>
    <img src={workBuddy} alt='image of cat'/>
    <img src={canyonCat} alt='image of cat'/>
    <img src={catInVan} alt='image of a van and a cat'/>
    <img src={workingCat} alt='image of a van and a cat'/>
  </div>
)








const titleItems = [{title:' JOB SKILLS' ,content:skills }, {title:'FUN FACTS' ,content:funFacts }, {title: 'FAVORITES',content: fav },  {title:'HOBBIES' ,content:hobbies },{title: 'ADVENTURES',content:adventures },{title: 'VAN BUILD',content:vanBuild }, {title: 'MY CAT',content:cat }]
const [titleIndex, setTitleIndex] = useState(null)
const [titleDisplay, setTitleDisplay] = useState(titleItems[0].title)

// Show next title based on arrow click
const handleTitleDisplay = (direction)=>{
  if (direction === 'left'){
    if (titleIndex === 0){
      setTitleIndex(0)
    }else{
      setTitleIndex(titleIndex - 1)
    }
  }else if (direction === 'right'){  
   let lastTitle = titleItems.length - 1

    if (titleIndex === lastTitle){
      setTitleIndex(lastTitle)
    }else{
      setTitleIndex(titleIndex + 1)   
    }
  }
}
// everytime titleindex is changed, update the content to be displayed
useEffect(() => {
  if(titleIndex !== null){
    setTitleDisplay(titleItems[titleIndex].title)
    handleDisplay(titleItems[titleIndex].content)
  } 

}, [titleIndex]);



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

      <div className='titleCol' ref={titleScroll} >
        <div className='leftArrow' onClick={()=>{
          handleTitleDisplay('left')
        }}>
          <AiOutlineDoubleLeft/>
       </div>

        <div className='titleDisplay'>
          {titleDisplay}
        </div>

        <div className='rightArrow' onClick={()=>{
            handleTitleDisplay('right')
          }}>
            <AiOutlineDoubleRight/>
        </div>
      </div>
   
      <div className='learnMore' ref={introPicture} onClick={()=>{
        introPicture.current.style.display = 'none'
        titleScroll.current.style.display = 'flex'
        setTitleIndex(0)
      }}>

        <img src={me} alt={'image of Joann'}/>

      </div>
          {display}
        <Link to='/' className='homeLink'>Joann Carter, Software Engineer</Link>
     </div>

  );
}

export default About;
