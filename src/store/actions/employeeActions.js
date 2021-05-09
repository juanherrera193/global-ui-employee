import * as actionTypes from './index';

export const getEmployessStart = () => {
    return {
        type: actionTypes.GET_EMPLOYEES_START
    };
};

export const getEmployessSuccess = () => {
    return {
        type: actionTypes.GET_EMPLOYEES_SUCCESS
    };
};

export const getEmployessFail = (error) => {
    return {
        type: actionTypes.GET_EMPLOYEES_FAIL,
        error: error
    };
};

export const getEmployesStart = () => {
    return {
        type: actionTypes.GET_EMPLOYEE_BY_ID_START
    };
};

export const getEmployeeSuccess = () => {
    return {
        type: actionTypes.GET_EMPLOYEE_BY_ID_SUCCESS
    };
};

export const getEmployeeFail = (error) => {
    return {
        type: actionTypes.GET_EMPLOYEE_BY_ID_FAIL,
        error: error
    };
};

export const getAllEmployeesAction = () => {
    return {
        type: actionTypes.GET_EMPLOYEES
    }
};

export const getEmployeeAction = (id) => {
    return {
        type: actionTypes.GET_EMPLOYEE_BY_ID, 
        id: id
    }
};