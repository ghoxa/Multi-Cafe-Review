import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import styles from "../Css/register.module.css";
import { CircularProgress } from "@material-ui/core";

const userId = localStorage.getItem("userId");
class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    Promise.all([
      axios.get(
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}`
      ),
    ])
      .then(([res]) => {
        this.setState({
          userInfo: res.data,
          joinDate: "",
          sweet: res.data.sweet,
          sour: res.data.sour,
          bitter: res.data.bitter,
          coffee_sour: res.data.coffee_sour,
          isLoaded: true,
        });
        // console.log(this.state.userInfo)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  modUserVal = (id) => () => {
    let temp = document.getElementById(id).value;
    let userData = prompt("데이터를 수정해 주세요");
    if (userData) {
      document.getElementById(id).value = userData;
    } else {
      document.getElementById(id).value = temp;
    }
  };

  handleSubmit = () => {
    const { sweet, sour, bitter, coffee_sour } = this.state;

    const signup_info = {
      userId: document.getElementById("id").value,
      pwd: document.getElementById("password").value,
      phone: document.getElementById("phonenumber").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      joinDate: "",
      sweet: sweet,
      sour: sour,
      bitter: bitter,
      coffee_sour: coffee_sour,
    };

    console.log(signup_info);
    Promise.all([
      axios.put(
        `https://multicafe-server.xyz/Multi-Cafe-Review/api/user`,
        signup_info
      ),
    ]).then((res) => {
      alert("수정완료");
      window.location.replace("/formPage");
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

  handleInputCoffeeSour = (rating) => {
    this.setState({
      coffee_sour: rating,
    });
  };

  render() {
    const { isLoaded, userInfo } = this.state;
    if (!isLoaded) {
      return (
        <div
          id="loader"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          <CircularProgress />
        </div>
      );
    } else {
      return (
        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
              <aside className="col-md-2">
                <div className="card">
                  <article className="filter-group">
                    <header className="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse_2"
                        aria-expanded="false"
                        className=""
                      >
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">마이페이지</h6>
                      </a>
                    </header>
                    <div
                      className="filter-content collapse show"
                      id="collapse_2"
                    >
                      <div className="card-body">
                        <ul className="list-menu">
                          <li>
                            <Link to="/formPage">개인정보수정</Link>
                          </li>
                          <li>
                            <Link to="/mylike">찜 목록 </Link>
                          </li>
                          <li>
                            <Link to="/myrecent">최근 본 메뉴 </Link>
                          </li>
                          <li>
                            <Link to="/myreview">내 리뷰 관리</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>

              <main className="col-md-10">
                <Card>
                  <CardHeader>Form Grid</CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup row>
                        <Label for="exampleId" sm={2}>
                          Id
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="id"
                            id="id"
                            placeholder="id placeholder"
                            value={userInfo.userId}
                            // onClick = {this.modUserVal("id")}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="examplePassword" sm={2}>
                          Password
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="password"
                            id="password"
                            placeholder="password placeholder"
                            value={userInfo.pwd}
                            onClick={this.modUserVal("password")}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}>
                          Email
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="email"
                            id="email"
                            placeholder="with a placeholder"
                            value={userInfo.email}
                            onClick={this.modUserVal("email")}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}>
                          Phone Number
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="text"
                            id="phonenumber"
                            placeholder="with a placeholder"
                            value={userInfo.phone}
                            onClick={this.modUserVal("phonenumber")}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="exampleAddress" sm={2}>
                          Address
                        </Label>
                        <Col sm={10}>
                          <Input
                            type="text"
                            id="address"
                            placeholder="address placeholder"
                            value={userInfo.address}
                            onClick={this.modUserVal("address")}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <RatingSweet
                          onChange={this.handleInputSweet}
                          val={userInfo.sweet}
                        />
                        <RatingSour
                          onChange={this.handleInputSour}
                          val={userInfo.sour}
                        />
                        <RatingBitter
                          onChange={this.handleInputBitter}
                          val={userInfo.bitter}
                        />
                        <RatingAcidity
                          onChange={this.handleInputCoffeeSour}
                          val={userInfo.coffee_sour}
                        />
                      </FormGroup>

                      <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                          <Button onClick={this.handleSubmit}>Submit</Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </main>
            </div>
          </div>
        </section>
      );
    }
  }
}

const RatingSweet = ({ onChange, val }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>단맛 </span>
      <span class={styles.rating}>
        <ReactStars
          activeColor="#ffc107"
          value={val}
          size={25}
          isHalf={true}
          onChange={onChange}
        />
      </span>
    </div>
  );
};

const RatingSour = ({ onChange, val }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>신맛 </span>
      <span class={styles.rating}>
        <ReactStars
          activeColor="#ffc107"
          value={val}
          size={25}
          isHalf={true}
          onChange={onChange}
        />
      </span>
    </div>
  );
};

const RatingBitter = ({ onChange, val }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>쓴맛 </span>
      <span class={styles.rating}>
        <ReactStars
          activeColor="#ffc107"
          value={val}
          size={25}
          isHalf={true}
          onChange={onChange}
        />
      </span>
    </div>
  );
};

const RatingAcidity = ({ onChange, val }) => {
  return (
    <div className={styles.taste}>
      <span class={styles.font}>산미 </span>
      <span class={styles.rating}>
        <ReactStars
          activeColor="#ffc107"
          value={val}
          size={25}
          isHalf={true}
          onChange={onChange}
        />
      </span>
    </div>
  );
};

export default FormPage;
