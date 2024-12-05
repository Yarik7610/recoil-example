import { Suspense } from "react"
import { RecoilRoot } from "recoil"
import { Counter } from "./components/Counter/Counter"
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary"
import { Todos } from "./components/Todos/Todos"

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <Todos />
        </Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  )
}

export default App
