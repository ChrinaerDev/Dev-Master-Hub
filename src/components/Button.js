

const Button = ({ params }) => {
  return (
    <div 
    className =  {`btn ${params.class}`} 
    onClick={()=>{params.role()}}
    style = {
        {
         width : params.width + 'px',
         height : params.height + 'px'
        }
    }
    ><div className="btn_icon">{params.icon}</div><div>{params.text}</div>
    </div>
  )
}

export default Button
