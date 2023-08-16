import { useState } from 'react'
import { mockTodos } from './mocks/mockTodos'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState(mockTodos)

  return (
    <>
      <div className='todoapp'>
        <Todos todos={todos} />
      </div>
    </>
  )
}

export default App
