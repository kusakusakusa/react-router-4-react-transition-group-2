import React from 'react';
import { CSSTransition } from 'react-transition-group';

const FadeWrapper = WrappedComponent => {
  return class FadeWrapper extends React.Component {

    constructor(props) {
      super(props);
      this.state = { in: true }
    }

    componentWillUnmount() {
      this.setState({in: false})
    }

    render() {
      return (
        <CSSTransition
          timeout={this.props.timeout || 400}
          classNames="fade"
          in={this.state.in}>

          <WrappedComponent {...this.props} />

        </CSSTransition>
      );
    }
  }
};

export default FadeWrapper;
