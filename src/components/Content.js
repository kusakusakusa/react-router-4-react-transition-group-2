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
      .cell.text-center
        %h1 This is {params.contentId} page !!
    ~)
  }
}

export default Content