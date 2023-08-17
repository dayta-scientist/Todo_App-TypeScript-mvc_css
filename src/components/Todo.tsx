import { TodoId, Todo as TodoType } from "../types"

// type Props = TodoType
interface Props extends TodoType {
  onHandleDelete: ({id}: TodoId) => void
  onToggleCompleted : ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onHandleDelete, onToggleCompleted }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    onToggleCompleted({
      id,
      completed: event.target.checked
    })
  }

  return(
    <div>
      <input 
        type="checkbox" 
        className="toggle"
        checked={completed}
        key={id}
        onChange={handleChangeCheckbox}
        />
        <label>{title}</label>
        <button 
          className="destroy"
          onClick={() => {onHandleDelete({id})} } />
    </div>
  )
}