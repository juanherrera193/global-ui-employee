import * as actionTypes from '../actions';
import { updateObject } from '../utility';

const initialState = {
    error: null,
    loading: false,
    employees: []
};

const getAllEmployeesStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const getAllEmployeesSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        employees: action.response
    });
};

const getAllEmployeesFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        employees: []
    });
};

const getEmployeeStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const getEmployeeSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        employees: [action.response]
    });
};

const getEmployeeFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        employees: []
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EMPLOYEES_START: return getAllEmployeesStart(state, action);
        case actionTypes.GET_EMPLOYEES_SUCCESS: return getAllEmployeesSuccess(state, action);
        case actionTypes.GET_EMPLOYEES_FAIL: return getAllEmployeesFail(state, action);
        case actionTypes.GET_EMPLOYEE_BY_ID_START: return getEmployeeStart(state, action);
        case actionTypes.GET_EMPLOYEE_BY_ID_SUCCESS: return getEmployeeSuccess(state, action);
        case actionTypes.GET_EMPLOYEE_BY_ID_FAIL: return getEmployeeFail(state, action);
        default:
            return state;
    }
};

export default reducer;