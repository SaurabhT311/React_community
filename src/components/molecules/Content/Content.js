import PropTypes from 'prop-types'
import React from 'react'
import Image from '../../atoms/Image/Image'
import Links from '../../atoms/Link/Link'
require('./_style.scss')
const Content = (props) => (
  <div className="contact-book">
    <div>
      <Image/>
    </div>
    <div className="m__content">
      <Links to={'/'} text={'Contact Book Using Redux-Toolkit'} />
    </div>
  </div>
)

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Content
