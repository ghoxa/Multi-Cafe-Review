import { Link } from 'react-router-dom';
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
                <Input type='id' name='id' placeholder='id 입력' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword' sm={2}>
                Password
              </Label>
              <Col>
                <Input type='id' name='id' placeholder='password 입력' />
              </Col>
            </FormGroup>
              
            <FormGroup check>
              <Label check>
                  <Input type="checkbox" />{' '}
                  {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
              </Label>
            </FormGroup>
            <hr />
            <Button
              size="lg"
              className="bg-gradient-theme-left border-0"
              block
              onClick={this.handleSubmit}>Login
            </Button>

            <div className="text-center pt-1">
              <h6>or</h6>
              <h6>
                  <Link to='/register'>
                      Signup
                  </Link>
              </h6>
            </div>
          </Form>
      </div>
    );
  }  
  
}

export default SignIn;