import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FadeTransition from '_components/FadeTransition'

class Content extends Component {
  constructor(props) {
    super(props)

    this.state = { in: true }
  }

  componentWillUnmount() {
    this.setState({in: false})
  }

  render() {
    const { path, params } = this.props.match

    return (~
      %FadeTransition(
        timeout={350}
        classNames="fade"
        shouldShow={this.state.in})
        
        .cell.text-center
          %h1 This is {params.contentId} page !!
        
        .cell.auto
          %Link(to="/") Back
    ~)
  }
}

export default Content