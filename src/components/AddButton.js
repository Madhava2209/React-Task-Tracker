
const AddButton = ({onClick, text}) => {
    return (
        <button 
          className="btn"
          onClick={onClick}
          >{text}</button>
    )
}

export default AddButton
