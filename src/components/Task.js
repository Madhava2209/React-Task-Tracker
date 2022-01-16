import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.remainder ? 'remainder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer', float: 'right'}} onClick={() => onDelete(task.id)} /></h3>
            <h5>{task.day}  </h5>
            {/* <h6>{task.remainder ? 'Yes' : 'No'}</h6> */}
        </div>
    )
}

export default Task
