import { useState } from "react"
import { FaBookReader, FaBoxOpen, FaBrain, FaPen, FaPuzzlePiece } from "react-icons/fa"
import RoundIcon from "./RoundIcon"
import TitleDouble from "./TitleDouble"
import ImagePopUp from "./ImagePopUp"
import Colours from "../data/colours"
import Text from "../data/text"

const BiographySection = ({scrollBarTop}) => {

   
    const [pop_up_img_set_1_on, setPimgSet1On] = useState(1)
    const [pop_up_img_set_2_on, setPimgSet2On] = useState(1)

    const changeSet1Img = (val)=>{
        setPimgSet1On(pop_up_img_set_1_on + val < 0 ? 3 : pop_up_img_set_1_on + val > 3 ? 1 : pop_up_img_set_1_on + val)
    }
    const changeSet2Img = (val)=>{
        setPimgSet2On(pop_up_img_set_2_on + val < 0 ? 3 : pop_up_img_set_2_on + val > 3 ? 1 : pop_up_img_set_2_on + val)
    }
   
    return (
      <nav className="biosec_parent"> 
      <div className="biosec">
        <div className="biosec_overlay" 
        style={
           { 
            top: 200 + scrollBarTop + 'px'
          }
        }
        >
         <h1>Explore Your Creativity Using Our Packages and products</h1>
        </div>
         <div className="m-auto centered_box_1">
              <header className="bio_header">
                <div className="bio_icon">
                    <RoundIcon 
                    icon={<FaBookReader/>} 
                    style = {{
                        c: Colours.icon_red,
                        bg: Colours.icon_bg_red
                    }}/>
                    </div>
                <div className="text_head">
                   <TitleDouble 
                   major = "About Dev Master Hub"
                   minor = "Who are we "
                   style = {
                    {
                      c1: Colours.icon_bg_red,
                      c2: Colours.icon_red
                    }
                   }
                   />   
                </div>
              </header>
               <section>
                   <span className="text_zone">
                    {Text.biography_text_one}</span>  
                   <span className="img_zone"> 
                    <ImagePopUp
                     source = "public/logo192.png"
                     style = {{
                        pushup: true,
                        set: 1,
                        on: pop_up_img_set_1_on
                     }}
                     changer = {changeSet1Img}
                    /> 
                    </span>  
               </section>
               {/* <div className="h_line"></div> */}
               <>
               <section>
                   <span className="text_zone">
                    {Text.biography_text_two}</span>  
                   <span className="img_zone"> 
                    <ImagePopUp
                     source = "public/logo192.png"
                     style = {{
                        pushup: false,
                        set: 2,
                        on: pop_up_img_set_2_on
                     }}
                     changer = {changeSet2Img}
                    /> 
                    </span>  
               </section>
               </>
               <footer>
               <TitleDouble 
                   major = "What we offer"
                   minor = "at Dev Master Hub"
                   style = {
                    {
                      c1: Colours.icon_bg_red,
                      c2: Colours.icon_red
                    }
                   }
                   />

                <ul>
                    <li><RoundIcon icon={<FaPen/>} style = {{c: Colours.icon_red,bg: Colours.icon_bg_red}}/>Comprehensive Courses</li>
                    <li><RoundIcon icon={<FaPuzzlePiece/>} style = {{c: Colours.icon_red,bg: Colours.icon_bg_red}}/>Interactive Learning</li>
                    <li><RoundIcon icon={<FaBoxOpen/>} style = {{c: Colours.icon_red,bg: Colours.icon_bg_red}}/>Prebuilt Templates</li>
                    <li><RoundIcon icon={<FaBrain/>} style = {{c: Colours.icon_red,bg: Colours.icon_bg_red}}/>Expert Guidance</li>
                </ul>   
               </footer>

         </div>
      </div>
      </nav> 
    )
  }
  
  export default BiographySection

