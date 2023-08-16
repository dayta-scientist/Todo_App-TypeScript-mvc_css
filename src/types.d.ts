export type idCrypto = `${string}-${string}-${string}-${string}-${string}`

export interface Todo {
    
    id: string
    title: string
    completed: boolean
  
}

export type TodoList = Todo[] 

export type PartialTodo = Partial<Todo>

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>