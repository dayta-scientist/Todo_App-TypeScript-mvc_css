import { useState } from 'react'
import { mockTodos } from './mocks/mockTodos'
import { Todos } from './components/Todos'
import { TodoId } from './types'

function App() {
  const [todos, setTodos] = useState(mockTodos)

  const handleDelete = ({id}: TodoId) : void => {
    const newId = todos.filter(todo => todo.id !== id)
    setTodos(newId)
  }

  return (
    <>
      <div className='todoapp'>
        <Todos 
          todos={todos}
          onHandleDelete={handleDelete}
         />
      </div>
    </>
  )
}

export default App
