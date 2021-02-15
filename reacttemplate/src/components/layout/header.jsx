import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
// import cafeListJson from "./cafeList.json";
import axios from "axios";
import { ThemeProvider } from "react-bootstrap";
import { CircularProgress } from "@material-ui/core";

const cafeApi = "/api/cafe";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    Promise.all([axios.get(cafeApi)])
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

  handleClick = value => () => {
    // console.log(value);
    localStorage.setItem("cafeId", value)
    window.location.replace("/")
  }

  render() {
    const { isLoaded } = this.state;
    const { logged, onLogout } = this.props;

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
            <div onClick={this.handleClick(cafe[i]["cafeId"])}>
              {/* <img
              className="rounded-circle"
              style={{ width: 100, height: 100 }}
              src={list[i]["logoImg"]}
            /> */}
              {cafe[i]["name"]}
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
                    <Link to="/home" className="brand-wrap">
                      {" "}
                      Home
                    </Link>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    {/* <form action="#" className="search">
                                  <div className="input-group w-100">
                                      <input type="text" className="form-control" placeholder="Search" />
                                      <div className="input-group-append">
                                      <button className="btn btn-primary" type="submit">
                                          <i className="fa fa-search"></i>
                                      </button>
                                      </div>
                                  </div>
                              </form>  */}
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="widgets-wrap float-md-right">
                      <div className="widget-header  mr-3">
                        <a
                          href="#"
                          className="icon icon-sm rounded-circle border"
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                        <span className="badge badge-pill badge-danger notify">
                          0
                        </span>
                      </div>
                      <div className="widget-header icontext">
                        <Link
                          to="/formPage"
                          className="icon icon-sm rounded-circle border"
                        >
                          <i className="fa fa-user"></i>
                        </Link>
                        <div className="text">
                          <span className="text-muted">Welcome!</span>
                          <div>
                            {/*<Link to='/' onClick={onLogout}>Logout</Link>*/}
                            <Link to="./signin">Sign in</Link>|
                            <Link to="./register"> Register</Link>
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
                  slidesPerView={6}
                  // onSlideChange={() => console.log("slide change")}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>                    
                      <div onClick={this.handleClick(localStorage.removeItem("all"))}>
                        {/* <img
                        className="rounded-circle"
                        style={{ width: 100, height: 100 }}
                        src={list[i]["logoImg"]}
                      /> */}
                        모든카페                     
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
