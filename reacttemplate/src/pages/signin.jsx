// 로그인 페이지

import { Link } from 'react-router-dom';
import React from 'react';
import { Button, FormGroup, Input, Label, Col } from 'reactstrap';
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      phone: '',
      email: '',
      address: '',
      sweet: '',
      sour: '',
      bitter: '',
      data: {}, // api 통해 받아오는 json 객체를 담음
      isAdmin: false,
    };
  }

  // id 입력창 관리
  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  // password 입력창 관리
  handlePW = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  // 로그인버튼 클릭시 서버로 데이터 전송
  handleSubmit = (e) => {
    const { id, pw } = this.state;
    e.preventDefault();

    const login_info = {
      userId: id,
      pwd: pw,
    };

    Promise.all([axios.post('http://localhost:9090/multicafe/api/login', login_info)]).then((res) => {
      this.setState({
        data: res[0].data,
      });
      console.log(this.state.data);

      if (this.state.data != '') {
        alert('로그인되었습니다');

        this.setState({
          id: this.state.data.userId,
          phone: this.state.data.phone,
          email: this.state.data.email,
          address: this.state.data.address,
          sweet: this.state.data.sweet,
          sour: this.state.data.sour,
          bitter: this.state.data.bitter,
          isAdmin: this.state.data.adminCheck,
        });

        // 관리자로 로그인할 경우 admin을 true로 표시 / 일반 사용자일 경우 admin은 false
        if (this.state.isAdmin) {
          localStorage.setItem('admin', this.state.isAdmin);
        }

        // 로그인한 id를 로컬스토리지에 저장, isLogin true로 설정(로그인했음을 표시)
        localStorage.setItem('userId', id);
        localStorage.setItem('isLogin', true);
        window.location.replace('/');
      } else {
        alert('아이디 혹은 비밀번호를 확인하세요');
        this.setState({
          id: '',
          pw: '',
        });
      }
    });
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for='exampleId' sm={2}>
              Id
            </Label>
            <Col>
              <Input type='id' name='id' placeholder='id 입력' value={this.state.id} onChange={this.handleId} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for='examplePassword' sm={2}>
              Password
            </Label>
            <Col>
              <Input type='password' name='password' placeholder='password 입력' value={this.state.pw} onChange={this.handlePW} />
            </Col>
          </FormGroup>
          <br></br>
          <hr />
          <Button size='lg' className='bg-gradient-theme-left border-0' block type='submit'>
            Login
          </Button>

          <div className='text-center pt-1'>
            <h6>or</h6>
            <h6>
              <Link to='/register'>Signup</Link>
            </h6>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
