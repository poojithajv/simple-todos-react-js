// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-container">
      <p className="item">{title}</p>
      <button type="button" className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
