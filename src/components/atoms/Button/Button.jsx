import PropTypes from 'prop-types'
import React from 'react'

require('./_style.scss')

const Button = (props) => (
  <button className={props.className}>{props.text}</button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Button
