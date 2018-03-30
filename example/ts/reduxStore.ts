import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createHistoryEnhancer from 'farce/lib/createHistoryEnhancer';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createMatchEnhancer from 'found/lib/createMatchEnhancer';
import Matcher from 'found/lib/Matcher';

import foundReducer from 'found/lib/foundReducer';
import routes from './routes';


export const reducers = combineReducers({
  found: foundReducer,
});

const finalCreateStore = compose(
  createHistoryEnhancer({
    protocol: new BrowserProtocol(),
    middlewares: [queryMiddleware],
  }),
  createMatchEnhancer(new Matcher(routes)),
)(createStore);

export default finalCreateStore(reducers);
