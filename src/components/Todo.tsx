import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  done: boolean;
  handleToggle(): void;
  handleRemove(): void;
}
interface ItemProps {
  done?: boolean;
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCenterd};
  margin: 0 auto;
  padding: 0.7em 1em;
  background-color: inherit;
  &:hover {
    background-color: ${props => props.theme.bgColors.secondary};
    i {
      visibility: visible;
    }
  }
`;
const Mark = styled.i<ItemProps>`
  display: inline-block;
  visibility: hidden;
  cursor: pointer;
`;
const Checked = styled(Mark)`
  color: ${props =>
    props.done ? props.theme.hlColors.main : props.theme.textColors.secondary};
  visibility: ${props => (props.done ? 'visible' : 'hidden')};
`;
const Remove = styled(Mark)`
  color: 'red';
`;
const Text = styled.span<ItemProps>`
  flex: 1;
  margin: 0 1rem;
  line-height: 1.5em;
  word-break: break-word;
  color: ${props =>
    props.done ? props.theme.textColors.secondary : 'inherit'};
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

const Todo: React.FC<Props> = ({ text, done, handleToggle, handleRemove }) => (
  <Wrapper>
    <Checked done={done} onClick={handleToggle}>
      &#x2714;
    </Checked>
    <Text done={done}>{text}</Text>
    <Remove onClick={handleRemove}>&#x274C;</Remove>
  </Wrapper>
);

export default Todo;
