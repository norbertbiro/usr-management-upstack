import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Level } from 'react-bulma-components'
import SearchBar from './SearchBar'

import helperStyles from '../styles/helpers.module.scss'

const PageHeader = ({ subtitle, children, searchbar, inverted }) => (
  <Box>
    <Level
      renderAs="nav"
      className={inverted && `${helperStyles.is_inverted_flex}`}>
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
  inverted: PropTypes.bool,
}

PageHeader.defaultProps = {
  searchbar: true,
}

export default PageHeader
