import { selector } from "recoil"
import { counterAtom } from "../atoms/counterAtom"

export const doubleCounterSelector = selector({
  key: "doubleCounterSelector",
  get: ({ get }) => {
    const counter = get(counterAtom)
    return counter * 2
  },
  set: ({ set }, newVal) => set(counterAtom, newVal)
})
