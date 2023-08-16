import { TodoId, TodoList } from "../types"
import { Todo } from "./Todo"

interface Props {
  todos: TodoList
  onHandleDelete: ({id}: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onHandleDelete }) => {
  return(
    <ul className="todo-list">
      {todos.map((todo) => (
        <li 
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}>
          <Todo 
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onHandleDelete={onHandleDelete}
            /> 
        </li>
      ))}
    </ul>
  )
}