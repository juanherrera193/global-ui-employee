import React, { Component } from "react";
import { Form, Button, Col, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

import {
  getAllEmployeesAction,
  getEmployeeAction,
} from "../../store/actions/employeeActions";

import Employee from "../Employee/Employee";

import "./Home.css";

class Home extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    let employeeId = event.target.employeeId.value;
    if (employeeId) {
      console.log(employeeId);
      this.props.onGetEmployeeById(employeeId);
    } else {
      this.props.onGetEmployees();
    }
  };

  render() {
    let button = null;
    if (this.props.loading) {
      button = (
        <Button type="submit" className="mb-2" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      );
    } else {
      button = (
        <Button type="submit" className="mb-2">
          Search
        </Button>
      );
    }

    let table = null;
    if (this.props.employees && this.props.employees.length > 0) {
      table = <Employee />;
    }

    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <Form.Row className="d-flex align-items-end">
            <Form.Group as={Col}>
              <Form.Control
                className="mb-2"
                id="employeeId"
                name="employeeId"
                placeholder="Enter the employee id"
              />
            </Form.Group>
            <Form.Group as={Col}>{button}</Form.Group>
          </Form.Row>
        </Form>
        <br />
        {table}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onGetEmployees: () => dispatch(getAllEmployeesAction()),
    onGetEmployeeById: (id) => dispatch(getEmployeeAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
