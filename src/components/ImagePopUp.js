
const ImagePopUp = ({ sources, style, changer }) => {
  return (
    <div className="popup_img_box">
        <div 
        className=
        {`popup_img ${style.set ? `popup_img_set_${style.set}` : `popup_img_set_1`} 
        ${style.on ? `popup_img_set_${style.set}_on_${style.on}` : `popup_img_set_${style.set}_on_1`}`} 
        style={{
        marginTop: style.pushup ? '-100px' : ''
        }}
        onClick={()=>changer(1)}
        >
            {/* <div className="click_on"></div> */}
        </div> 
    </div>
  )
}

export default ImagePopUp
