import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import axios from "axios";
import { ThemeProvider } from "react-bootstrap";
import { CircularProgress } from "@material-ui/core";
import HeaderImage from "./header_image";

const cafeApi = "http://localhost:9090/multicafe/api/cafe";

if (localStorage.getItem("cafeId") == null) {
  localStorage.setItem("cafeId", 0);
}
if (localStorage.getItem("categoryId") == null) {
  localStorage.setItem("categoryId", 0);
}
if (localStorage.getItem("conditionId") == null) {
  localStorage.setItem("conditionId", "good");
}
if (localStorage.getItem("keyword") == null) {
  localStorage.setItem("keyword", 0);
}
if (localStorage.getItem("reviewConditionId") == null) {
  localStorage.setItem("reviewConditionId", "recent");
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      myLike: [],
      login: localStorage.getItem("isLogin"),
    };
  }

  // 주석주석
  componentDidMount() {
    const userId = localStorage.getItem("userId");
    const cafeApi = axios.get("http://localhost:9090/multicafe/api/cafe");
    Promise.all([cafeApi])
      .then(([res]) => {
        this.setState({
          Cafe: res.data,
          isLoaded: true,
        });
        // console.log(this.state.Cafe);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClickHome = (value) => () => {
    // console.log(value);
    localStorage.setItem("cafeId", 0);
    localStorage.setItem("categoryId", 0);
    localStorage.setItem("conditionId", "good");
    localStorage.setItem("keyword", 0);
    window.location.replace("/");
  };

  handleClickCafe = (value) => () => {
    // console.log(value);
    localStorage.setItem("cafeId", value);
    localStorage.setItem("categoryId", 0);
    localStorage.setItem("keyword", 0);
    // window.location.replace('/');
    this.stateRefresh();
  };

  checkLogid = () => {
    alert("로그인을 해주세요!");
  };  

  render() {
    // const login = localStorage.getItem('isLogin');
    const { isLoaded, login } = this.state;
    const isAdmin = localStorage.getItem("admin");

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
      let cafelist = [];
      let cafe = this.state.Cafe;
      for (let i = 0; i < cafe.length; i++) {
        cafelist.push(
          <SwiperSlide>
            <div onClick={this.handleClickCafe(cafe[i]["cafeId"])}>
              <img
                id={"cafe" + cafe[i]["cafeId"]}
                className="rounded"
                style={{ width: 100, height: 100 }}
                src={cafe[i]["image"]}
              />
            </div>
          </SwiperSlide>
        );
      }
      return (
        <div>
          <header className="section-header">
            <section className="header-main border-bottom">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-4">
                    <Link
                      to="/home"
                      className="brand-wrap"
                      onClick={this.handleClickHome()}
                    >
                      <img
                        src="https://cdn.dribbble.com/users/4078256/screenshots/7165484/ohcaffe-dribbble_4x.png"
                        style={{ width: 160, height: 120 }}
                      />
                    </Link>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <img
                      src="https://www.ohmyzip.com/images2017/sub/banner_ohcafevisual.jpg"
                      style={{ width: 548, height: 120 }}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="widgets-wrap float-md-right">
                      <div className="widget-header  mr-3">
                        <a
                          href="/mylike"
                          className="icon icon-sm rounded-circle border"
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>

                        <span className="badge badge-pill badge-danger notify">
                          {this.state.myLike.length}
                        </span>
                      </div>
                      <div className="widget-header icontext">
                        {login ? (
                          <Link
                            to={isAdmin ? "/admin_insert" : "/formPage"}
                            className="icon icon-sm rounded-circle border"
                          >
                            <i className="fa fa-user"></i>
                          </Link>
                        ) : (
                          <a
                            onClick={this.checkLogid}
                            className="icon icon-sm rounded-circle border"
                          >
                            <i className="fa fa-user"></i>
                          </a>
                        )}

                        <div className="text">
                          <span className="text-muted">Welcome! </span>
                          {login ? (
                            <span>{localStorage.getItem("userId")}님</span>
                          ) : (
                            <span></span>
                          )}
                          <div>
                            <Link to={login ? "/signout" : "/signin"}>
                              {login ? "Logout" : "Login"}
                            </Link>{" "}
                            {login ? (
                              ""
                            ) : (
                              <Link to="/register">| register</Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </header>

          
        </div>
      );
    }
  }
}

export default Header;
