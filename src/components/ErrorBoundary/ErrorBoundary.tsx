import { Component } from "react"
import { ErrorBoundaryProps, ErrorBoundaryState } from "./types"

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    this.setState({ error })
  }

  render() {
    if (this.state.hasError) return <p>{this.state.error?.message}</p>
    return this.props.children
  }
}
