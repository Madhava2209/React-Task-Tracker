import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [remainder, setRemainder] = useState(false)
    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('Please add Task')
        }
        onAdd({text, day: date, remainder})
        setText('')
        setDate('')
        setRemainder(false)
    }
    return (
        <form className='add-task' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                     />
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type="text" placeholder='Add Date & Time' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control-check' >
                <label>Set Remainder</label>
                <input type="checkbox" checked={remainder} value={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)} />
            </div>
            <input type="submit" className='btn' />
        </form>
    )
}

export default AddTask
