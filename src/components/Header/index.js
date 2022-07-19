import React from "react";
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

export default function Header({ children }) {

  return (
    <Container>
      <Title>JStack's Blog</Title>
    </Container>
  );

}