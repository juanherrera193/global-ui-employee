import { call, put } from 'redux-saga/effects';
import { getEmployees, getEmployeeById } from '../services/employeeService';

import * as actionTypes from '../store/actions'

export function* getEmployeesSaga() {
    yield put({ type: actionTypes.GET_EMPLOYEES_START });
    try {
        const response = yield call(getEmployees);
        yield put({ type: actionTypes.GET_EMPLOYEES_SUCCESS, response });
    } catch (error) {
        console.log(error);
        yield put({ type: actionTypes.GET_EMPLOYEES_FAIL, error })
    }
}

export function* getEmployeeByIdSaga(action) {
    yield put({ type: actionTypes.GET_EMPLOYEE_BY_ID_START });
    try {
        const response = yield call(getEmployeeById, action.id);
        yield put({ type: actionTypes.GET_EMPLOYEE_BY_ID_SUCCESS, response });
    } catch (error) {
        console.log(error);
        yield put({ type: actionTypes.GET_EMPLOYEE_BY_ID_FAIL, error })
    }
}