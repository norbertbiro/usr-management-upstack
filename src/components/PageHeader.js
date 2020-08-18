import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Level } from 'react-bulma-components'
import SearchBar from './SearchBar'

const PageHeader = ({ subtitle, children, searchbar }) => (
  <Box>
    <Level renderAs="nav">
      {children}
      {subtitle ? (
        <Level.Side align="left">
          <Level.Item>
            <Heading size={3} subtitle>
              {subtitle}
            </Heading>
          </Level.Item>
        </Level.Side>
      ) : (
        <Level.Side align="left" />
      )}
      {searchbar && (
        <Level.Side align="right">
          <Level.Item>
            <SearchBar />
          </Level.Item>
        </Level.Side>
      )}
    </Level>
  </Box>
)

PageHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
  searchbar: PropTypes.bool.isRequired,
}

PageHeader.defaultProps = {
  searchbar: true,
}

export default PageHeader
