import { useState } from 'react'
import { mockTodos } from './mocks/mockTodos'
import { Todos } from './components/Todos'
import { FilterValue, TodoId, Todo as TodoType, TodoTitle } from './types';
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount= todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}: string) : void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <>
      <div className='todoapp'>
        <Header saveTodo={handleAddTodo} />
        <Todos 
          onToggleCompleted={handleCompleted}
          todos={filteredTodos}
          onHandleDelete={handleDelete}
         />
         <Footer 
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={handleRemoveAllCompleted}
          handleFilterChange={handleFilterChange}
          />
      </div>
    </>
  )
}

export default App
