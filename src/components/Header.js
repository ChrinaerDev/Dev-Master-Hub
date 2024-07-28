import {FaChevronRight, FaMailBulk, FaWhatsapp} from 'react-icons/fa'
import {FaChevronLeft} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import { useState } from "react"
import Button from "./Button.js"


const Header = () => {

  const [text_slider, text_slider_on] = useState(1)
  const [welcomeTextAnimation, setWelcomeTextAnimation] = useState({animation: ""})

  const chevronStyles = {
    
  }

  const changeBigText = (dir)=>{
    text_slider_on( text_slider + dir < 1 ? 4 : text_slider + dir > 4 ? 1 : text_slider + dir)
    if(dir > 0) {
      setWelcomeTextAnimation({animation: "pushLeftChange 0.5s linear forwards"})
    }else{
      setWelcomeTextAnimation({animation: "pushRightChange 0.5s linear forwards"})
    }
    setTimeout(()=>{
      setWelcomeTextAnimation({animation: ""})
    },100)
    console.log(welcomeTextAnimation)
  }
  return (
    <header className="overlay">
       <div className="header_layer_1 pad-10">
         <div>
            <Button params={
              {
                class: 'green fl_left green_hov',
                role: ()=>{},
                width: 190,
                height: 50,
                text: `677 73 73 31`,
                icon: <FaPhone/>
              }
            } />
         </div>
         <div>
         <Button params={
              {
                class: 'red red_hov',
                role: ()=>{},
                width: 350,
                height: 50,
                text: "www.geraudchrinaer@gmail.com",
                icon: <FaMailBulk/>
              }
            } />
         </div>
       </div>

       <div className="header_layer_2">
         <div className='chev'><FaChevronLeft onClick = {()=>changeBigText(-1)} style={chevronStyles}/></div>
         <div className="fs-big ta-c text_welcome" style = {welcomeTextAnimation} >
          {
          text_slider === 1 ? 
          (
          <>
          <h1>Dev-Master-Hub</h1>
          <p className='ff-mono'>Master Programming with ease</p>
          </>
          ) : 
          text_slider === 2 ? 
          (
          <>
          <h1>Unlock your Potential</h1>
          <p className='ff-mono'>Learn Programming with Dev Master Hub</p>
          </>
          ) : 
          text_slider === 3 ? 
          (
          <>
          <h1>Transform Your Skills</h1>
          <p className='ff-mono'>The ultimate guide to Programming success</p>
          </>
          ) : 
          (
          <>
          <h1>Join the Revolution</h1>
          <p className='ff-mono'>Innovate and Create with Dev Master Hub</p>
          </>
          )
          }
          
         </div>
         <div className='chev'><FaChevronRight onClick = {()=>changeBigText(1)}style={chevronStyles}/></div>
       </div>
    </header>
  )
}

export default Header
