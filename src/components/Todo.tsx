import { Todo as TodoType } from "../types"

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
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
          onClick={() => {} } />
    </div>
  )
}