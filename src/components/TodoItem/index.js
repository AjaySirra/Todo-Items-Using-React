import './index.css'

const TodoItem = props => {
  const {TodoList, deleteTodo} = props
  const {id, title} = TodoList
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-items">
      <div className="items">
        <p className="title">{title}</p>
        <button type="button" className="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
