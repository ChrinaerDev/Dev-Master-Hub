import faqs from "../data/faqs"
import FAQ from "./FAQ"
const FAQs = () => {
  return (
    <div className="faqs">
        {faqs.map((faq)=>(
            <FAQ
             key={faq.id}
             sender_name={faq.name}
             message={faq.question}
             answer={faq.answer}
             likes={faq.likes}
            />
        ))}
    </div>
  )
}

export default FAQs
