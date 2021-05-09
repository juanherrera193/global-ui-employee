import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { connect } from "react-redux";

class Employee extends Component {
  render() {
    let employeeList = this.props.employees;
    return (
      <div>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Contract Type</th>
              <th>Role name</th>
              <th>Role description</th>
              <th>Salary annual</th>
              <th>Salary monthly</th>
              <th>Salary hourly</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.contractType}</td>
                  <td>{employee.roleName}</td>
                  <td>{employee.roleDescription}</td>
                  <td>{employee.salary.annual}</td>
                  <td>{employee.salary.monthly}</td>
                  <td>{employee.salary.hourly}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.employee.error,
    loading: state.employee.loading,
    employees: state.employee.employees,
  };
};

export default connect(mapStateToProps)(Employee);
