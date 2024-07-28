
const RoundIcon = ({ icon, style }) => {
  return (
    <div className="round_icon square-25" 
    style={
      {
        color: style.c ? style.c : 'white',
        backgroundColor: style.bg ? style.bg : 'black'
      } 
    }>
        {icon}
    </div>
  )
}

export default RoundIcon
