import { atom } from "recoil"

export const counterAtom = atom<number>({
  key: "counterAtom",
  default: 0,
  effects: [
    ({ onSet }) => {
      onSet((newVal) => console.log("set counter atom to: " + newVal))
    }
  ]
})
