import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, Col } from 'reactstrap';

class SignIn extends React.Component {
  render() {
    return (
      <div className="container">
          <Form>
            <FormGroup>
              <Label for='exampleId' sm={2}>
                Id
              </Label>
              <Col>
                <Input type='id' name='id' placeholder='id 등록' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword' sm={2}>
                Password
              </Label>
              <Col>
                <Input type='password' name='password' placeholder='password 등록' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail' sm={2}>
               Email
              </Label>
              <Col>
                <Input type='email' name='email' placeholder='email 등록' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail' sm={2}>
                Phone Number
              </Label>
              <Col>
                <Input type='text' name='phonenumber' placeholder='phonenumber 등록' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for='exampleAddress' sm={2}>
                Address
              </Label>
              <Col>
                <Input type='text' name='address' placeholder='address 등록' />
              </Col>
            </FormGroup>
              
            <hr />
            <Button
              size="lg"
              className="bg-gradient-theme-left border-0"
              block
              onClick={this.handleSubmit}>Signup
            </Button>

          </Form>
      </div>
    );
  }  
  
}

export default SignIn;