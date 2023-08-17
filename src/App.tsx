import { useState } from 'react'
import { mockTodos } from './mocks/mockTodos'
import { Todos } from './components/Todos'
import { TodoId, Todo as TodoType } from './types'

function App() {
  const [todos, setTodos] = useState(mockTodos)

  const handleDelete = ({id}: TodoId) : void => {
    const newId = todos.filter(todo => todo.id !== id)
    setTodos(newId)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) : void => {
    const newTodo = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodo) 
  }

  return (
    <>
      <div className='todoapp'>
        <Todos 
          onToggleCompleted={handleCompleted}
          todos={todos}
          onHandleDelete={handleDelete}
         />
      </div>
    </>
  )
}

export default App
