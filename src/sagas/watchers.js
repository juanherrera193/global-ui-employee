import { takeLatest } from "redux-saga/effects";
import { getEmployeesSaga, getEmployeeByIdSaga } from "./employeeSaga";

import * as types from "../store/actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_EMPLOYEES, getEmployeesSaga);
  yield takeLatest(types.GET_EMPLOYEE_BY_ID, getEmployeeByIdSaga);
}
