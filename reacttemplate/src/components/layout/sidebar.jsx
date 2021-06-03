import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: localStorage.getItem("isLogin"),
      admin: localStorage.getItem("admin"),
      isLoaded: false,
    };
  }

  handleClickCategory = (value) => () => {
    // console.log(value);
    localStorage.setItem("categoryId", value);
    localStorage.setItem("keyword", 0);

    this.props.stateRefresh();
  };

  handleClickSerch = () => {
    localStorage.setItem(
      "keyword",
      document.getElementById("inputkeyword").value
    );
    localStorage.setItem("categoryId", 0);

    this.props.stateRefresh();
  };

  componentDidMount() {
    const cateUrl = axios.get(
      `https://multicafe-server.xyz/Multi-Cafe-Review/api/category`
    );

    Promise.all([cateUrl])
      .then(([res]) => {
        this.setState({
          cate: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  printCategoryList() {
    const { isLoaded } = this.state;
    const categoryId = localStorage.getItem("categoryId");

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
      let cateList = [];
      let category = this.state.cate;
      for (let i = 0; i < category.length; i++) {
        if (categoryId == category[i]["categoryId"]) {
          cateList.push(
            <li>
              <a
                onClick={this.handleClickCategory(category[i]["categoryId"])}
                style={{ backgroundColor: "orange" }}
              >
                {category[i]["name"]}
              </a>
            </li>
          );
        } else {
          cateList.push(
            <li>
              <a
                id={"category" + category[i]["categoryId"]}
                onClick={this.handleClickCategory(category[i]["categoryId"])}
              >
                {category[i]["name"]}
              </a>
            </li>
          );
        }
      }
      return cateList;
    }
  }

  render() {
    if (this.state.admin) {
      // 관리자 로그인 경우
      return (
        <aside className="col-md-3">
          <div className="card">
            <article className="filter-group">
              <header className="card-header">
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapse_1"
                  aria-expanded="true"
                  className=""
                >
                  <i className="icon-control fa fa-chevron-down"></i>
                  <h6 className="title">CATEGORY</h6>
                </a>
              </header>
              <div className="filter-content collapse show" id="collapse_1">
                <div className="card-body">
                  <form className="pb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        id="inputkeyword"
                        className="form-control"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-light"
                          type="button"
                          onClick={this.handleClickSerch}
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>

                  <ul className="list-menu">
                    {/* <li style={{color : "orange"}}>{localStorage.getItem('categoryId')}</li> */}
                    <li>
                      <a onClick={this.handleClickCategory(0)}>모든카테고리</a>
                    </li>
                    {this.printCategoryList()}
                  </ul>
                </div>
              </div>
            </article>

            <article className="filter-group">
              <header className="card-header">
                <Link
                  to="/adminpage"
                  data-toggle="collapse"
                  data-target="#collapse_3"
                  aria-expanded="false"
                  className=""
                >
                  <i className="icon-control fa fa-chevron-down"></i>
                  <h6 className="title">관리자페이지</h6>
                </Link>
              </header>
              <div className="filter-content collapse show" id="collapse_3">
                <div className="card-body">
                  <ul className="list-menu">
                    <li>
                      <Link to="/admin_insert">메뉴 추가</Link>
                    </li>
                    <li>
                      <Link to="/admin_update">메뉴 수정</Link>
                    </li>
                    <li>
                      <Link to="/admin_cafe">카페 관리</Link>
                    </li>
                    <li>
                      <Link to="/admin_warning">리뷰 신고 관리</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </aside>
      );
    } else {
      // 관리자 아닌 일반 사용자의 경우
      if (this.state.login) {
        // 로그인한 경우
        return (
          <aside className="col-md-3">
            <div className="card">
              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_1"
                    aria-expanded="true"
                    className=""
                  >
                    <i className="icon-control fa fa-chevron-down"></i>
                    <h6 className="title">CATEGORY</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="card-body">
                    <form className="pb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          id="inputkeyword"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-light"
                            type="button"
                            onClick={this.handleClickSerch}
                          >
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>

                    <ul className="list-menu">
                      {/* <li style={{color : "orange"}}>{localStorage.getItem('categoryId')}</li> */}
                      <li>
                        <a onClick={this.handleClickCategory(0)}>
                          모든카테고리
                        </a>
                      </li>
                      {this.printCategoryList()}
                    </ul>
                  </div>
                </div>
              </article>

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
                    <h6 className="title">지도</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse_2">
                  <div className="card-body">
                    <ul className="list-menu">
                      <li>
                        <Link to="/map">내 주변 매장 찾기</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

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
                <div className="filter-content collapse show" id="collapse_2">
                  <div className="card-body">
                    <ul className="list-menu">
                      <li>
                        {this.state.login ? (
                          <Link to="/formpage">개인정보수정</Link>
                        ) : (
                          <a onClick={this.checkLogid}>개인정보수정</a>
                        )}
                      </li>
                      <li>
                        <a href="/mylike">찜 목록 </a>
                      </li>
                      <li>
                        <a href="/mytaste">내 취향 메뉴 </a>
                      </li>
                      <li>
                        <a href="/myrecent">최근 본 메뉴 </a>
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
        );
      } else {
        // 로그인 안한 경우
        return (
          <aside className="col-md-3">
            <div className="card">
              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_1"
                    aria-expanded="true"
                    className=""
                  >
                    <i className="icon-control fa fa-chevron-down"></i>
                    <h6 className="title">CATEGORY</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse_1">
                  <div className="card-body">
                    <form className="pb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          id="inputkeyword"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-light"
                            type="button"
                            onClick={this.handleClickSerch}
                          >
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>

                    <ul className="list-menu">
                      {/* <li style={{color : "orange"}}>{localStorage.getItem('categoryId')}</li> */}
                      <li>
                        <a onClick={this.handleClickCategory(0)}>
                          모든카테고리
                        </a>
                      </li>
                      {this.printCategoryList()}
                    </ul>
                  </div>
                </div>
              </article>

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
                    <h6 className="title">지도</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse_2">
                  <div className="card-body">
                    <ul className="list-menu">
                      <li>
                        <Link to="/map">내 주변 매장 찾기</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </aside>
        );
      }
    }
  }
}

export default SideBar;
