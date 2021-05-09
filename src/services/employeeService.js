import axios from 'axios';
import * as endpoints from './index';

export const getEmployees = async () => {
    const response = await axios.get(endpoints.EMPLOYEES_URL)
    return response.data;
}

export const getEmployeeById = async (id) => {
    console.log(id);
    const response = await axios.get(endpoints.EMPLOYEES_URL + '/' + id)
    return response.data;
}