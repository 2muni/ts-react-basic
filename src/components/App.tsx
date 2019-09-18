import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { v4 as uuid } from 'uuid';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Layout from './Layout';
import Title from './Title';
import InputForm from './InputForm';
import List from './List';
import Todo from './Todo';

interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>('');

  const handleToggle = (id: string) => {
    const nextTodos = todos.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTodos(nextTodos);
  };
  const handleRemove = (id: string) => {
    const nextTodos = todos.filter(item => item.id !== id);
    setTodos(nextTodos);
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInput(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: TodoItem = {
      id: `todo_${uuid()}`,
      text: input,
      done: false,
    };
    const nextTodos = todos.concat(newTodo);
    setInput('');
    setTodos(nextTodos);
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
