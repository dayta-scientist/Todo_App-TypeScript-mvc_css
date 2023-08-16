import { TodoId, Todo as TodoType } from "../types"

// type Props = TodoType
interface Props extends TodoType {
  onHandleDelete: ({id}: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onHandleDelete }) => {
  return(
    <div>
      <input 
        type="checkbox" 
        className="toggle"
        checked={completed}
        key={id}
        onChange={() => {}}
        />
        <label>{title}</label>
        <button 
          className="destroy"
          onClick={() => {onHandleDelete({id})} } />
    </div>
  )
}