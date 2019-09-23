import produce from 'immer';
import { v4 as uuid } from 'uuid';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export interface TodosState {
  todos: Todo[];
}

const CREATE = 'todos/CREATE' as const;
const REMOVE = 'todos/REMOVE' as const;
const TOGGLE = 'todos/TOGGLE' as const;

const create = (text: string) => ({
  type: CREATE,
  payload: { text },
});
const remove = (id: string) => ({
  type: REMOVE,
  payload: { id },
});
const toggle = (id: string) => ({
  type: TOGGLE,
  payload: { id },
});

type TodosActionTypes =
  | ReturnType<typeof create>
  | ReturnType<typeof remove>
  | ReturnType<typeof toggle>;

export const todosActions = {
  create,
  remove,
  toggle,
};

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = (
  state = initialState,
  action: TodosActionTypes
): TodosState => {
  switch (action.type) {
    case CREATE:
      return produce(state, draft => {
        draft.todos.push({
          id: `todo_${uuid()}`,
          text: action.payload.text,
          done: false,
        });
      });
    case REMOVE:
      return produce(state, draft => {
        draft.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      });
    case TOGGLE:
      return produce(state, draft => {
        draft.todos = state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.done = !todo.done;
          }
          return todo;
        });
      });
    default:
      return state;
  }
};
