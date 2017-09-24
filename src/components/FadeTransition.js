import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

const FadeTransition = ({shouldShow, timeout, classNames, child}) => {
  return (
    <CSSTransition
      timeout={timeout}
      classNames={classNames}
      in={shouldShow}>

      {child}

    </CSSTransition>
  )
}

export default FadeTransition