import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style: none;
`;

const List: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default List;
