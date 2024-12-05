import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom } from "../../recoil/atoms/counterAtom"
import { doubleCounterSelector } from "../../recoil/selectors/doubleCounterSelector"

export const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterAtom)
  const doubleCounter = useRecoilValue(doubleCounterSelector)
  const setArbitraryCounter = useSetRecoilState(doubleCounterSelector)

  const handleIncrement = () => setCounter((prev) => prev + 1)

  const handleDecrement = () => setCounter((prev) => prev - 1)

  const handleArbitraryCounter = () => setArbitraryCounter(5)

  return (
    <>
      <p>{counter}</p>
      <p>{doubleCounter}</p>
      <button onClick={handleArbitraryCounter}>Click to set counter to 5</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}
