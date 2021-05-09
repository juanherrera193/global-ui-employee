import { combineReducers } from 'redux';
import employee from './employeeReducers';

const rootReducer = combineReducers({
    employee
});

export default rootReducer;