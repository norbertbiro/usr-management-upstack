import React from 'react';
import PropTypes from 'prop-types';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const PageTitle = ({tag, children, className}) => {
  const TagName = tag || 'h1';
  return (
    <TagName className={className}>
      {children}
    </TagName>
  )
};

PageTitle.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default PageTitle;
