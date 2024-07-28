import { FaHeart } from "react-icons/fa"

const FAQ = ({key, sender_name, message, answer, likes}) => {
  return (
    <div className="faq">
        <header>
            <div 
            className="icon" 
            >{sender_name[0]}</div>
            <div className="name">
                {sender_name}  
            </div>
        </header>
       <section>
        <div className="quest_answ">
        <div className="question">{message}</div>
        <div className="answer">{answer}</div>
        </div>
        <div className="likes">
           <span><FaHeart/></span><span>{likes}</span>
       </div>
       </section>
    </div>
  )
}

export default FAQ
