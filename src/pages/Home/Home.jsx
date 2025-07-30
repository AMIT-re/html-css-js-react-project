import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import herobanner from '../../assets/herosection.jpg'
import herotitle from '../../assets/herotit.png'
import Play from '../../assets/play.png'
import Info from '../../assets/info.png'
import Titlecards from '../../components/Titlecards/Titlecards'

const home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img src={herobanner} alt="" className="banner-img"/>
        <div className="hero-caption">
          <img src={herotitle} alt="" className="caption-img" />
            <p>When Sam Witwicky's first car turns out to be a shape-shifting alien robot, he becomes a key
               figure in the fight to save Earth from the evil Decepticons.</p>
               <div className="herobtns">
                <button className="playButton"> <img src={Play} alt="" />Play</button>
                <button className="infobutton"> <img src={Info} alt="" /> More info</button>
                             

               </div>
               <Titlecards/>   
        </div>
      </div>
      
    </div>
  )
}

export default home
