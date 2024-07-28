import PropTypes from 'prop-types'
import Button from "./Button.js"

const Header = ({title, onAdd, showAdd
})=>{

    return (
        <header className ="header"> 
         <h1>{title}</h1>
         <Button color = {showAdd ? "black" : "green"} text = {showAdd ? 'Close' : 'Add'} onclick = {onAdd}/>
        </header>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}


//CSS IN JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
//     paddingLeft: '10px'
// }

export default Header

