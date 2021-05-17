import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import axios from "axios";
import { ThemeProvider } from "react-bootstrap";
import { CircularProgress } from "@material-ui/core";

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

          <section className="section-pagetop bg">
            <div className="container">
              <nav className="mt-4" aria-label="Page navigation sample">
                <Swiper
                  // spaceBetween={0}
                  slidesPerView={9}
                >
                  <SwiperSlide>
                    <div onClick={this.handleClickCafe(0)}>
                      <img
                        className="rounded"
                        style={{ width: 100, height: 100 }}
                        src="data:image/png;base64,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"
                      />
                    </div>
                  </SwiperSlide>
                  {cafelist}
                </Swiper>
              </nav>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default Header;
