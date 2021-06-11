import React from "react";
import { Button, FormGroup, Input, Label, Col } from "reactstrap";
import ReactStars from "react-rating-stars-component";
import styles from "../Css/register.module.css";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      email: "",
      phone: "",
      address: "",
      join_date: "",
      sweet: "",
      sour: "",
      bitter: "",
      coffee_sour: "",
      flag: false,
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

  handleInputAcidity = (rating) => {
    this.setState({
      coffee_sour: rating,
    });
  };

  // Signup 버튼 클릭시 서버로 데이터 전송
  handleSubmit = (e) => {
    const { id, pw, email, phone, address, sweet, sour, bitter, coffee_sour } = this.state;
    e.preventDefault();

    const regex_phone = /\d{3}-\d{4}-\d{4}/;
    if (!regex_phone.test(phone)) {
      alert("전화번호 형식이 알맞지 않습니다.('-' 함께 입력)");
      return;
    }

    const regex_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!regex_email.test(email)) {
      alert("이메일 형식이 알맞지 않습니다.(이메일 형식에 맞게 작성)");
      return;
    }

    const regex_pw = /^.*(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    if (!regex_pw.test(pw)) {
      alert("비밀번호 형식이 알맞지 않습니다.")
      return;
    }

    if (pw.length < 6) {
      alert("비밀번호를 6자리 이상 입력해주세요.")
      return;
    }

    if (
      id === "" ||
      pw === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      sweet === "" ||
      sour === "" ||
      bitter === "" ||
      coffee_sour === ""
    ) {
      alert("모든 입력을 완료해 주세요");
      return;
    }

    if (!this.state.flag) {
      alert("ID 중복체크를 해주세요");
      return;
    }

    const signup_info = {
      userId: id,
      pwd: pw,
      phone: phone,
      email: email,
      address: address,
      joinDate: "",
      sweet: sweet,
      sour: sour,
      bitter: bitter,
      coffee_sour: coffee_sour,
    };

    Promise.all([
      axios.post(
        "https://multicafe-server.xyz/Multi-Cafe-Review/api/register",
        signup_info
      ),
    ]).then((res) => {
      alert("회원가입 완료");
      window.location.replace("/signin");
    });
  };

  checkId = (e) => {
    const { id } = this.state;
    e.preventDefault();

    Promise.all([
      axios.get(
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/register/${id}/check`
      ),
    ])
      .then((res) => {
        if (res[0].data === false) {
          alert("사용 불가능한 Id입니다.");
          this.setState({
            id: "",
          });
        } else {
          alert("사용 가능한 Id입니다.");
          this.state.flag = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleId" sm={2}>
              Id
            </Label>
            <Col>
              <Input
                type="id"
                id="id"
                name="id"
                placeholder="id 등록"
                value={this.state.id}
                onChange={this.handleId}
              />
              <button onClick={this.checkId}>ID 중복체크</button>
            </Col>
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword" sm={4}>
              Password (영어,숫자 포함 6자리 이상)
            </Label>
            <Col>
              <Input
                type="password"
                name="password"
                placeholder="password 등록"
                value={this.state.pw}
                onChange={this.handlePW}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col>
              <Input
                type="text"
                name="email"
                placeholder="email 등록"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" sm={3}>
              Phone Number ('-' 입력)
            </Label>
            <Col>
              <Input
                type="text"
                name="phonenumber"
                placeholder="phonenumber 등록"
                value={this.state.phone}
                onChange={this.handlePhone}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress" sm={2}>
              Address
            </Label>
            <Col>
              <Input
                type="text"
                name="address"
                placeholder="address 등록"
                value={this.state.address}
                onChange={this.handleAddress}
              />
            </Col>
          </FormGroup>

          <RatingSweet onChange={this.handleInputSweet} />
          <RatingSour onChange={this.handleInputSour} />
          <RatingBitter onChange={this.handleInputBitter} />
          <RatingAcidity onChange={this.handleInputAcidity} />
          <br></br>

          <hr />
          <Button
            size="lg"
            className="bg-gradient-theme-left border-0"
            block
            type="submit"
          >
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
        <ReactStars
          activeColor="#ffc107"
          size={25}
          isHalf={true}
          onChange={onChange}
        />
      </span>
    </div>
  );
};

const RatingSour = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>신맛 </span>
      <span class={styles.rating}>
        <ReactStars
          activeColor="#ffc107"
          size={25}
          isHalf={true}
          onChange={onChange}
        />
      </span>
    </div>
  );
};

const RatingBitter = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>쓴맛 </span>
      <span class={styles.rating}>
        <ReactStars
          activeColor="#ffc107"
          size={25}
          isHalf={true}
          onChange={onChange}
        />
      </span>
    </div>
  );
};

const RatingAcidity = ({ onChange }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>산미 </span>
      <span class={styles.rating}>
        <ReactStars
          activeColor="#ffc107"
          size={25}
          isHalf={true}
          onChange={onChange}
        />
      </span>
    </div>
  );
};
export default Register;
