
import {useState} from 'react'

import Header from './components/Header.js';
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
            id : 1,
            text: 'Coding in React',
            day: 'Dim 14 July 24',
            reminder: true
        },
        {
            id : 2,
            text: 'Coding in My PB',
            day: 'Dim 15 July 24',
            reminder: true
        },
        {
            id : 3,
            text: 'Coding in EveryDay',
            day: 'Dim 16 July 24',
            reminder: false
        },
    ]
)


///Delete Task

const deleteTask = (id)=>{
  console.log('delete',id)
  setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle Reminder

const toggleReminder = (id, r) =>{
  
  setTasks(tasks.map(
    (task)=>(
      task.id === id ? {...task, reminder: !task.reminder } : task
    )
  )
  )
  console.log('remind',id)
}

//Add Task 
const addTask = (task)=>{
   console.log(task)
   const id = Math.floor(Math.random()* 10000) + 1
   const newTask = {id, ...task}
   //How to add to the already available tasks 
   setTasks([...tasks, newTask]) 
   //ie, we spread out the existing ones, and then we add a new one to it
}

  return (
    <div className="container">
       <Header title = "Task Manager" text = "Add" onAdd = {()=>{
        setShowAddTask(!showAddTask)
       }} 
       showAdd = {showAddTask}/>
       {showAddTask && <AddTask onAdd = {addTask}/>}
       {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />) : ('No Task to Show')
       }
    </div>
  );
}

export default App;
