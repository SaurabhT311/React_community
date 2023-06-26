import PropTypes from 'prop-types'
import React from 'react'

require('./_style.scss')

const Input = (props) => (
  <input
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    className={props.className}
    onChange={props.onChange}
  />
)

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
}

export default Input
