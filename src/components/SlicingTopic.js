
const SlicingTopic = ({ x, icon, text, style_ }) => {
  return (
    <div className="slicer" style = {{
        backgroundColor: style_.bg  ? style_.bg : 'var(--theme_green)',
    }}>
       <div 
       className="topic" 
       style =  {{
         marginLeft: x !== '0' ? x + '%' : 'unset',
         backgroundColor: style_.tbg ? style_.tbg : 'white',
         border: `1px solid ${style_.bg ? style_.bg : 'var(--theme_green)'}`,
         color: style_.tc ? style_.tc : 'black',
         boxShadow: style_.bg ? `0px 2px 0px 1px ${style_.bg}` : "0px 2px 0px 1px var(--theme_green)" 
       }}
       >
        <span>{icon}</span><span>{text}</span>
       </div>
    </div>
  )
}

export default SlicingTopic
