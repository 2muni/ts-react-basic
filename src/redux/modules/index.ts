import { combineReducers } from 'redux';
import { TodosState, todosActions, todosReducer } from './todo';

export interface StoreState {
  todos: TodosState;
}
export const actions = {
  todos: todosActions,
};
export default combineReducers<StoreState>({ todos: todosReducer });
