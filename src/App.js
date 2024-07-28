import { useState } from "react"
import { FaAppStoreIos, FaHandshake, FaLaugh, FaProjectDiagram, FaUserFriends } from "react-icons/fa"
import BackToTopButton from "./components/BackToTopButton"
import Header from "./components/Header"
import SlicingTopic from "./components/SlicingTopic"
import BiographySection from "./components/BiographySection"
import PackagesSection from "./components/PackagesSection"
import FAQs from "./components/FAQs"
import Footer from "./components/Footer"
import Colours from "./data/colours"
import jquery from "./jquery"

//import 
const App = () => {

  const [scrollBarTop, setScrollBarTop] = useState(0)
  const [btt_display, set_btt_display]  = useState(false)

  const btt = ()=>{
    jquery("body,html").animate({
      scrollTop: 0
  }, 600);
  }
 

jquery(window).scroll(function () {
  //console.log(jquery(window).scrollTop(),anim)
  setScrollBarTop(jquery(window).scrollTop())
  set_btt_display(jquery(window).scrollTop() >= 800)
});

  return (
    <div className="container">
       <BackToTopButton onclick = {btt} display={btt_display}/>
       <Header />
       <SlicingTopic x = "0" icon={<FaLaugh/>} text="Welcome in our offical website" style_ = {{tc: 'black'}}/>
       <BiographySection scrollBarTop = {scrollBarTop}/>
       <SlicingTopic x = "-50" icon={<FaProjectDiagram/>} text="Our Projects and Packages" style_ = {{tc: Colours.icon_bg_red, bg: Colours.icon_red}}/>
       <PackagesSection/>
       <SlicingTopic x = "50" icon={<FaUserFriends/>} text="FAQs" style_ = {{tc: 'black', bg: 'black'}}/>
       <FAQs/>
       <SlicingTopic x="-50" icon={<FaHandshake/>} text="Join Us" style_ = {{tc: 'black'}}/>
       <Footer/>
    </div>
  )
}

export default App

/**
 * 
 */