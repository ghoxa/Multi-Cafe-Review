import { SpaOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, Col } from 'reactstrap';
import ReactStars from 'react-rating-stars-component';
import styles from '../Css/register.module.css';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      email: '',
      phone: '',
      address: '',
      join_date: '',
      sweet: '',
      sour: '',
      bitter: '',
    };
  }

  // 인풋값 핸들
  handleId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePW = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleInputSweet = (rating) => {
    this.setState({
      sweet: rating,
    });
  };

  handleInputSour = (rating) => {
    this.setState({
      sour: rating,
    });
  };

  handleInputBitter = (rating) => {
    this.setState({
      bitter: rating,
    });
  };

  // Signup 버튼 클릭시 서버로 데이터 전송
  handleSubmit = (e) => {
    const { id, pw, email, phone, address, sweet, sour, bitter } = this.state;
    e.preventDefault();

    if (id === '' || pw === '' || email === '' || phone === '' || address === '' || sweet === '' || sour === '' || bitter === '') {
      alert('모든 입력을 완료해 주세요');
      return;
    }

    const signup_info = {
      userId: id,
      pwd: pw,
      phone: phone,
      email: email,
      address: address,
      joinDate: '',
      sweet: sweet,
      sour: sour,
      bitter: bitter,
    };

    Promise.all([axios.post('/api/register', signup_info)]).then((res) => {
      alert('회원가입 완료');
      window.location.replace('/signin');
    });
  };

  checkId = (e) => {
    const { id } = this.state;
    e.preventDefault();

    Promise.all([axios.get(`http://localhost:9090/multicafe/api/register/${id}/check`)])
      .then((res) => {
        if (res[0].data === false) {
          alert('사용 불가능한 Id입니다.');
          this.setState({
            id: '',
          });
        } else {
          alert('사용 가능한 Id입니다.');
        }
      })
      .catch((err) => {
        console.log(err);
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
              <Input type='id' id='id' name='id' placeholder='id 등록' value={this.state.id} onChange={this.handleId} />
              <button onClick={this.checkId}>ID 중복체크</button>
            </Col>
          </FormGroup>

          <FormGroup>
            <Label for='examplePassword' sm={2}>
              Password
            </Label>
            <Col>
              <Input type='password' name='password' placeholder='password 등록' value={this.state.pw} onChange={this.handlePW} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail' sm={2}>
              Email
            </Label>
            <Col>
              <Input type='email' name='email' placeholder='email 등록' value={this.state.email} onChange={this.handleEmail} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail' sm={2}>
              Phone Number
            </Label>
            <Col>
              <Input type='text' name='phonenumber' placeholder='phonenumber 등록' value={this.state.phone} onChange={this.handlePhone} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for='exampleAddress' sm={2}>
              Address
            </Label>
            <Col>
              <Input type='text' name='address' placeholder='address 등록' value={this.state.address} onChange={this.handleAddress} />
            </Col>
          </FormGroup>

          <RatingSweet onChange={this.handleInputSweet} />
          <RatingSour onChange={this.handleInputSour} />
          <RatingBitter onChange={this.handleInputBitter} />
          <br></br>

          <hr />
          <Button size='lg' className='bg-gradient-theme-left border-0' block type='submit'>
            Signup
          </Button>
        </form>
      </div>
    );
  }
}

const RatingSweet = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>단맛 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={25} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const RatingSour = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>신맛 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={25} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

const RatingBitter = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>쓴맛 </span>
      <span class={styles.rating}>
        <ReactStars activeColor='#ffc107' size={25} isHalf={true} onChange={onChange} />
      </span>
    </div>
  );
};

export default Register;
