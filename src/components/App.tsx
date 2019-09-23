import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState, actions } from '../redux/modules';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Layout from './Layout';
import Title from './Title';
import InputForm from './InputForm';
import List from './List';
import Todo from './Todo';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');
  const { todos } = useSelector((state: StoreState) => state.todos);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actions.todos.create(input));
    setInput('');
  };
  const handleToggle = (id: string) => {
    dispatch(actions.todos.toggle(id));
  };
  const handleRemove = (id: string) => {
    dispatch(actions.todos.remove(id));
  };
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Title title={'Todo List'} />
          <InputForm
            value={input}
            placeholder={'Input Todo...'}
            submit={'Push!'}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <List>
            {todos.map(item => (
              <Todo
                key={item.id}
                text={item.text}
                done={item.done}
                handleToggle={() => handleToggle(item.id)}
                handleRemove={() => handleRemove(item.id)}
              />
            ))}
          </List>
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
