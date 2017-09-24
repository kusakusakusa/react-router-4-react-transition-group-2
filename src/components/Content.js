import React, { Component } from 'react'

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
      %div
        %h1 {params.contentId}
    ~)
  }
}