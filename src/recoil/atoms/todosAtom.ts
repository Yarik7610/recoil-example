import { atom } from "recoil"
import { Todo } from "../../types/todo"

export const todosAtom = atom<Todo[]>({
  key: "todosAtom",
  default: []
})
