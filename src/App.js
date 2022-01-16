import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn ReactJS',
        day: 'Jan 15, 7:45pm',
        remainder: true
    },
    {
        id: 2,
        text: 'Practice DSA',
        day: 'Jan 15, 10:45pm',
        remainder: true
    },
    {
        id: 3,
        text: 'Learn DRF',
        day: 'Jan 15, 11:45pm',
        remainder: false
    }
]

)
  const [showAddTask, toggleForm] = useState(false)

  const displayAddForm = () =>{
    toggleForm(!showAddTask)
  }
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }
  const toggleRemainder = (id) =>{
    setTasks(tasks.map(task => task.id === id ? {...task, remainder: !task.remainder} : task))
  }
  return (
    <div className="App">
      <div className="container">
        <Header displayForm={displayAddForm} showAddTask={showAddTask} />
        {
          showAddTask ?
          <AddTask onAdd={addTask} /> : ''
        }
        {
          tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} /> : 'No data available'
        }
      </div>
    </div>
  );
}

export default App;
