import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const Wrapper = styled.div`
  height: 6rem;
  width: 100%;
  background-color: ${props => props.theme.hlColors.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  color: ${props => props.theme.bgColors.main};
  font-size: 2rem;
`;

const Title: React.FC<Props> = ({ title }) => (
  <Wrapper>
    <Text>{title}</Text>
  </Wrapper>
);

export default Title;
