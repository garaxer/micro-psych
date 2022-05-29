import React, { ReactNode } from "react";

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
}

export default class SafeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {} // TODO: Log somewhere appropriate

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return <>{this.props.children}</>;
  }
}
