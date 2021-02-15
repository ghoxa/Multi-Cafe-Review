import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, Col } from 'reactstrap';
import axios from 'axios';
class SignIn extends React.Component {
  state = {
    id: '',
    pw: '',
    phone:'',
    email:'',
    address:'',
    sweet:'',
    sour:'',
    bitter:'',
    isLogin: null
  }

  // id 입력창 관리
  handleId = e => {
    this.setState({
      id: e.target.value
    });
  }

  // password 입력창 관리
  handlePW = e => {
    this.setState({
      pw: e.target.value
    });
  }

  // 로그인버튼 클릭시 서버로 데이터 전송
  handleSubmit = e => {
    e.preventDefault();

    const login_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    };
    Promise.all([axios.post('/api/login', login_info)])
      .then(([res]) => {
        console.log('post 성공');
        return res.json();
      })
      .then(json => { 
        if(json.success === true) {
          alert('로그인되었습니다');
          window.localStorage.setItem('userInfo', JSON.stringify(json))
  
          this.setState({
            id: json.userId,
            phone: json.phone,
            email: json.email,
            address: json.address,
            sweet: json.sweet,
            sour: json.sour,
            bitter: json.bitter,
            isLogin: json.success
          });
        this.props.history.push("/")
      } else {
        alert('아이디 혹은 비밀번호를 확인하세요');
      }
    });
  }

  render() {
    return (
      <div className="container">
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for='exampleId' sm={2}>
                Id
              </Label>
              <Col>
                <Input 
                  type='id' 
                  name='id' 
                  placeholder='id 입력'
                  value={this.state.id}
                  onChange={this.handleId}  
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword' sm={2}>
                Password
              </Label>
              <Col>
                <Input 
                  type='password' 
                  name='password' 
                  placeholder='password 입력' 
                  value={this.state.pw}
                  onChange={this.handlePW}
                />
              </Col>
            </FormGroup>
            <br></br>
            <hr />
            <Button
              size="lg"
              className="bg-gradient-theme-left border-0"
              block
              type="submit">Login
            </Button>

            <div className="text-center pt-1">
              <h6>or</h6>
              <h6>
                  <Link to='/register'>
                      Signup
                  </Link>
              </h6>
            </div>
          </form>
      </div>
    );
  }  
  
}


export default SignIn;