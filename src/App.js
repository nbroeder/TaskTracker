import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    }
  ])


  //Delete items
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default App;
