import { FaChevronCircleUp } from "react-icons/fa"

const BackToTopButton = ({display, onclick}) => {
  return (
    <div onClick = {onclick} className="btt_but_parent" style={{display: display ? 'unset' : 'none'}}>
      <div className="btt_but yellow square-80">
      <div className="btt_but red square-50">
      <div className="btt_but green square-25">
        <FaChevronCircleUp/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default BackToTopButton
