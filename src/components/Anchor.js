import React from 'react'

const Anchor = ({ children, ...props }) => (
  <a className="Others" {...props}>
    {children}
  </a>
)

export default Anchor
