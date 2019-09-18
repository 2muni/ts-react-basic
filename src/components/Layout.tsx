import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 4rem auto 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${props => props.theme.bgColors.main};
  > * {
    margin-bottom: 1rem !important;
  }
`;

const Layout: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Layout;
