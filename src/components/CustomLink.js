import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CustomLink = ({ className, target, children, sharedState }) => (
  <Link
    to={{
      pathname: target,
      state: sharedState,
    }}
    className={className}>
    {children}
  </Link>
)

CustomLink.propTypes = {
  className: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default CustomLink
