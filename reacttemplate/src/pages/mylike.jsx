import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
class Mylike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLike: [],
      isLoaded: false,
    };
  }

  handleClickMenu = (value) => () => {
    // console.log(value);
    localStorage.setItem("menuId", value);
    window.location.replace("/review");
  };

  handleClickPageNo = (No) => () => {
    localStorage.setItem("pageNo", No);
    this.stateRefresh();
  };

  stateRefresh = () => {
    this.setState({
      Menu: [],
      isLoaded: false,
    });
    this.callMenuList();
    this.printMenuList();
  };

  componentDidMount() {
    localStorage.setItem("pageNo", 1);
    const userId = localStorage.getItem("userId");
    const myLikeUrl = axios.get(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/menu/like/1`
    );
    Promise.all([myLikeUrl])
      .then(([res]) => {
        this.setState({
          Menu: res.data,
          isLoaded: true,
        });
        // console.log(this.state.Menu)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  callMenuList = async () => {
    const pageNo = localStorage.getItem("pageNo");
    const userId = localStorage.getItem("userId");

    const myLikeUrl = `https://multicafe-server.xyz/Multi-Cafe-Review/api/user/${userId}/menu/like/${pageNo}`;

    const res = await axios.get(myLikeUrl);
    this.setState({
      Menu: res.data,
      isLoaded: true,
    });
  };

  printPageNav() {
    const { Menu, isLoaded } = this.state;
    const pageNo = localStorage.getItem("pageNo");

    let pageList = [];

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
      if (Menu.prev == 0)
        pageList.push(
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
        );
      else {
        pageList.push(
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={this.handleClickPageNo(Menu.prev)}
            >
              Previous
            </a>
          </li>
        );
      }

      for (let i = Menu.start; i <= Menu.end; i++) {
        if (pageNo == i) {
          pageList.push(
            <li className="page-item active">
              <a
                className="page-link"
                href="#"
                onClick={this.handleClickPageNo(i)}
              >
                {i}
              </a>
            </li>
          );
        } else {
          pageList.push(
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={this.handleClickPageNo(i)}
              >
                {i}
              </a>
            </li>
          );
        }
      }

      if (Menu.next == 0)
        pageList.push(
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        );
      else {
        pageList.push(
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={this.handleClickPageNo(Menu.next)}
            >
              Next
            </a>
          </li>
        );
      }
    }

    return <ul className="pagination justify-content-center">{pageList}</ul>;
  }

  printMenuList() {
    const { isLoaded } = this.state;
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
      let menulist = [];
      let menu = this.state.Menu.list;
      for (let i = 0; i < menu.length; i++) {
        menulist.push(
          <div
            className="card col-md-4"
            onClick={this.handleClickMenu(menu[i]["menuId"])}
          >
            <div className="row no-gutters">
              <img
                style={{ height: 250 }}
                className="card-img-top"
                src={menu[i]["image"]}
                alt="Card image"
              />
              <div className="card-body">
                <h6 className="card-title">{menu[i]["name"]}</h6>
                <p className="text-success">{menu[i]["cafeName"]}</p>
                <ul className="rating-stars">
                  <span>평점: {menu[i]["grade"]}&nbsp;</span>
                  <span style={{ color: "silver", fontSize: 10 }}>
                    &nbsp;조회수: {menu[i]["click"]}
                  </span>
                  <span style={{ color: "silver", fontSize: 10 }}>
                    &nbsp;좋아요수: {menu[i]["good"]}
                  </span>
                  <ReactStars
                    style={{ display: "inline-flex" }}
                    edit={false}
                    activeColor="#ffc107"
                    value={menu[i]["grade"]}
                    size={15}
                    isHalf={true}
                  />
                </ul>
                <div className="price-wrap">
                  <span className="price h5">{menu[i]["price"]}원</span>
                </div>
                <br />
              </div>
            </div>
          </div>
        );
      }
      return menulist;
    }
  }

  render() {
    const { Menu, isLoaded } = this.state;

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
              <aside className="col-md-3">
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
                            <Link to="/formPage">개인정보수정 </Link>
                          </li>
                          <li>
                            <Link to="/mylike">찜 목록 </Link>
                          </li>
                          <li>
                            <Link to="/myrecent">최근 본 메뉴 </Link>
                          </li>
                          <li>
                            <Link to="/myreview">내 리뷰 관리 </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>

              {/* 이 부분 부터 바뀐다 */}
              <main className="col-md-9">
                <header className="border-bottom mb-4 pb-3">
                  <div className="form-inline">
                    <span className="mr-md-auto">
                      {Menu.count} Items found{" "}
                    </span>
                  </div>
                </header>

                <div className="row">{this.printMenuList()}</div>

                <nav className="mt-4" aria-label="Page navigation sample">
                  {this.printPageNav()}
                </nav>
              </main>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Mylike;
