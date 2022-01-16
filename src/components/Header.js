import AddButton from "./AddButton"
const Header = ({title, displayForm, showAddTask}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <AddButton onClick={displayForm} text={!showAddTask ? 'Add' : 'Hide'} />
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker'
}
export default Header
