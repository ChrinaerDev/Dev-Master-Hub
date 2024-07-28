
const Package = ({key, icon, name, grade, users, lang, desc, onclick}) => {
  return (
    <div className="package" onClick={()=>{onclick(desc)}}>
       <header className={icon}>
          
       </header>
       <section>
          <div id="list" className="name" >{name}</div>
          <div id="list" className="grade" ><span>Grade :</span> {grade}</div>
          <div id="list" className="num_users" ><span>Users :</span> {users}</div>
          <div id="list" className="lang" ><span>Lang :</span> {lang}</div>
       </section>
    </div>
  )
}

export default Package
