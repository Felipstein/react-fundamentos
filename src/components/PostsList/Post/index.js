import React from "react";
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Post({ children }) {

  return (
    <Container>
      {children}
    </Container>
  );

}

Post.propTypes = {
  children: PropTypes.node.isRequired,
} 