import RoundIcon from "./RoundIcon"
import Colours from "../data/colours"
import { FaFacebook, FaGithub, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="refrain">
                <span className="ref">Together,</span>
                <span>"We create, innovate, and shape the future of technology"</span>
            </div>
            <div className="links">
                <a href="https://github.com/ChrinaerDev" target="_blank">
                <RoundIcon
                    icon={<FaGithub />}
                    style={{
                        c: Colours.footer_ic_green,
                        bg: Colours.footer_ic_bg_green
                    }} />
                </a>
                <a href="https://patreon.com/G_Soft_Studios" target="_blank">
                <RoundIcon
                    icon={<FaPatreon/>}
                    style={{
                        c: Colours.footer_ic_green,
                        bg: Colours.footer_ic_bg_green
                    }} /> 
                </a>
                <a href="https://www.facebook.com/profile.php?id=100089301398494&mibextid=rS40aB7S9Ucbxw6v" target="_blank">
                <RoundIcon
                    icon={<FaFacebook />}
                    style={{
                        c: Colours.footer_ic_green,
                        bg: Colours.footer_ic_bg_green
                    }} />  
                </a>
               
                <a href="https://www.youtube.com/@ChristProg" target="_blank">
                <RoundIcon
                    icon={<FaYoutube />}
                    style={{
                        c: Colours.footer_ic_green,
                        bg: Colours.footer_ic_bg_green
                    }} /> 
                </a>       
                {/* <a href="">
                </a> 
                <RoundIcon
                    icon={<FaLinkedin />}
                    style={{
                        c: Colours.footer_ic_green,
                        bg: Colours.footer_ic_bg_green
                    }} />  */}
            </div>
            <div className="copy">
            Copyright © 2024 - All Rights Reserved - 
            </div>
        </div>
    )
}

export default Footer
