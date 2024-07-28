
const TitleDouble = ({ major, minor, style }) => {
  return (
    <div className="titleDouble">
       <h1 style = 
        {{
        color: style.c1 ? style.c1 : 'black'
        }}>
        {major}
        </h1>
       <p style= {{
        color: style.c2 ? style.c2 : 'black'
       }}>
        {minor}
       </p>
    </div>
  )
}

export default TitleDouble
