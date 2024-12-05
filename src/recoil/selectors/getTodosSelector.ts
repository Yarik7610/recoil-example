import { selector } from "recoil"
import { SERVER_URI } from "../../constants/api"
import { Todo } from "../../types/todo"

export const getTodosSelector = selector<Todo[]>({
  key: "getTodosSelector",
  get: async () => {
    try {
      const response = await fetch(SERVER_URI)
      if (!response.ok) throw response
      return await response.json()
    } catch (e) {
      throw e
    }
  }
})
