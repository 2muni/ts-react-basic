import React from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  placeholder: string;
  submit: string;
  handleChange(e: React.FormEvent<HTMLInputElement>): void;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const Form = styled.form`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCenterd};
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  all: unset;
  flex: 1;
  padding: 0.5em;
  border-bottom: 2px solid ${props => props.theme.bgColors.secondary};
  transition: border-bottom 0.2s ease-out;
  &:focus {
    border-bottom: 2px solid ${props => props.theme.hlColors.main};
  }
`;
const Submit = styled.button`
  margin-left: 2em;
  width: 5rem;
  line-height: 1.5rem;
  text-align: center;
  color: ${props => props.theme.bgColors.main};
  background-color: ${props => props.theme.hlColors.main};
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: ${props => props.theme.hlColors.secondary};
  }
`;

const InputForm: React.FC<Props> = ({
  value,
  placeholder,
  submit,
  handleChange,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
    <Input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
    <Submit type="submit">{submit}</Submit>
  </Form>
);

export default InputForm;
