import { useRecoilValue } from "recoil"
import { getTodosSelector } from "../../recoil/selectors/getTodosSelector"

export const Todos = () => {
  const todos = useRecoilValue(getTodosSelector)

  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  )
}
