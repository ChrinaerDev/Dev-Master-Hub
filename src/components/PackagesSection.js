import { useState } from "react"
import TitleDouble from "./TitleDouble"
import Colours from "../data/colours"
import Package from "./Package"
import Packages from "../data/packages"

const PackagesSection = () => {

  const [described, setDescribed] = useState(`Speed Up Development process, Train yourself better !`)

  return (
    <div className="packages">
        <div className="message">{described}</div>
        <div className="pkg_box">
          <header style={{margin: "20px 10px 0 0", alignContent: 'center',textAlign: "center"}}>
          <TitleDouble 
                   major = "Our Projects & Packages"
                   minor = "we got some cool stuffs for you!"
                   style = {
                    {
                      c1: 'black',
                      c2: 'black'
                    }
                   }
                   /> 
          </header>
          <section className="section" style={{width: "100%", height: "90%", background:"transparent"}}>
            <ul> 
              {Packages.map(
                (package_)=>(
                  <li>
                  <Package
                  key = {package_.id}
                  name = {package_.name}
                  icon = {package_.icon}
                  users = {package_.users}
                  grade = {package_.grade}
                  lang  = {package_.lang}
                  desc  = {package_.desc}
                  onclick = {setDescribed}
                  />  
                </li>
                )
              )}
            </ul>
          </section>
        </div>
    </div>
  )
}

export default PackagesSection
