import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './main/reducer';
import { DispatchType, MainAction, MainState } from './main/types';

export const store: Store<MainState, MainAction> & {
  dispatch: DispatchType;
} = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); //Need to be updated for production
