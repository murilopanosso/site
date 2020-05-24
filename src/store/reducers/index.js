import { combineReducers } from 'redux';
import Articles from './Articles';

const rootReducer = combineReducers({
    article: Articles,
  })
  
export default rootReducer