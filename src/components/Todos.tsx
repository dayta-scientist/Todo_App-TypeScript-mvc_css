import { TodoId, TodoList, Todo as TodoType } from "../types"
import { Todo } from "./Todo"

interface Props {
  todos: TodoList
  onHandleDelete: ({id}: TodoId) => void
  onToggleCompleted : ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onHandleDelete, onToggleCompleted }) => {
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
            onToggleCompleted={onToggleCompleted}
            /> 
        </li>
      ))}
    </ul>
  )
}