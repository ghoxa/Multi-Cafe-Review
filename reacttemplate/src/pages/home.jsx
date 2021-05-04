import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import ReactStars from "react-rating-stars-component";
import SideBar from "../components/layout/sidebar";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      customColor: {},
      login: localStorage.getItem("isLogin"),
      cateName: "",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  checkLogid = () => {
    alert("로그인을 해주세요!");
  };

  handleClickMenu = (value) => () => {
    // console.log(value);
    localStorage.setItem("menuId", value);
    window.location.replace("/review");
  };

  handleClickCategory = (value) => () => {
    // console.log(value);
    localStorage.setItem("categoryId", value);
    localStorage.setItem("keyword", 0);
    //window.location.replace('/');

    this.stateRefresh();
  };

  handleClickCondition = (value) => () => {
    // console.log(value);
    localStorage.setItem("conditionId", value);
    //window.location.replace('/');

    this.stateRefresh();
  };

  handleClickSerch = () => {
    localStorage.setItem(
      "keyword",
      document.getElementById("inputkeyword").value
    );
    localStorage.setItem("categoryId", 0);
    //window.location.replace('/');

    this.stateRefresh();
  };

  componentDidMount() {
    localStorage.setItem("mapId", "all");
    const cafeId = localStorage.getItem("cafeId");
    const categoryId = localStorage.getItem("categoryId");
    const keyword = localStorage.getItem("keyword");
    const conditionId = localStorage.getItem("conditionId");

    const cateUrl = axios.get(`http://localhost:9090/multicafe/api/category`);
    let menuApi = `http://localhost:9090/multicafe/api/menu/list/${conditionId}`;

    if (cafeId == 0) {
      //모든 카페
      if (categoryId == 0 && keyword == 0) {
        // 모든 카테고리
        menuApi = axios.get(
          `http://localhost:9090/multicafe/api/menu/list/${conditionId}`
        );
      } else if (categoryId == 0 && keyword != 0) {
        //키워드 검색
        menuApi = axios.get(
          `http://localhost:9090/multicafe/api/menu/search/${keyword}/${conditionId}`
        );
      } else if (categoryId != 0) {
        //카테고리 선택
        menuApi = axios.get(
          `http://localhost:9090/multicafe/api/menu/category/${categoryId}/${conditionId}`
        );
      }
    } else if (cafeId != 0) {
      // 카페선택
      if (categoryId == 0 && keyword == 0) {
        // 모든 카테고리
        menuApi = axios.get(
          `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/${conditionId}`
        );
      } else if (categoryId == 0 && keyword != 0) {
        //키워드 검색
        menuApi = axios.get(
          `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/search/${keyword}/${conditionId}`
        );
      } else if (categoryId != 0) {
        //카테고리 선택
        menuApi = axios.get(
          `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/category/${categoryId}/${conditionId}`
        );
      }
    } else {
      alert("예외상황!!");
    }
    Promise.all([cateUrl, menuApi])

      .then(([res, res2]) => {
        this.setState({
          cate: res.data,
          Menu: res2.data,
          isLoaded: true,
        });
        // console.log(Menu);
      })
      .catch((err) => {
        console.log(err);
      });
    // window.location.replace("/");
  }

  // 메뉴목록만 새로고침
  stateRefresh = () => {
    this.setState({
      Menu: [],
    });
    this.callMenuList();
    this.printMenuList();
  };
  // 비동기통신으로 메뉴리스트 받아와서 menuList에 저장
  callMenuList = async () => {
    const cafeId = localStorage.getItem("cafeId");
    const categoryId = localStorage.getItem("categoryId");
    const keyword = localStorage.getItem("keyword");
    const conditionId = localStorage.getItem("conditionId");
    // this.setState({
    //   isLoaded: false,
    // });​
    let menuApi = "";
    if (cafeId == 0) {
      //모든 카페
      if (categoryId == 0 && keyword == 0) {
        // 모든 카테고리
        menuApi = `http://localhost:9090/multicafe/api/menu/list/${conditionId}`;
      } else if (categoryId == 0 && keyword != 0) {
        //키워드 검색
        menuApi = `http://localhost:9090/multicafe/api/menu/search/${keyword}/${conditionId}`;
      } else if (categoryId != 0) {
        //카테고리 선택
        menuApi = `http://localhost:9090/multicafe/api/menu/category/${categoryId}/${conditionId}`;
      }
    } else if (cafeId != 0) {
      // 카페선택
      if (categoryId == 0 && keyword == 0) {
        // 모든 카테고리
        menuApi = `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/${conditionId}`;
      } else if (categoryId == 0 && keyword != 0) {
        //키워드 검색
        menuApi = `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/search/${keyword}/${conditionId}`;
      } else if (categoryId != 0) {
        //카테고리 선택
        menuApi = `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/category/${categoryId}/${conditionId}`;
      }
    } else {
      alert("예외상황!!");
    }
    //console.log(menuApi)
    const res = await axios.get(menuApi);
    this.setState({
      Menu: res.data,
      isLoaded: true,
    });
    //console.log(this.state.Menu)
  };
  printMenuList() {
    const { isLoaded, login } = this.state;
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
      let menu = this.state.Menu;
      for (let i = 0; i < 15; i++) {
        try {
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
        } catch (error) {
          console.log(error);
        }
      }
      return menulist;
    }
  }
  render() {
    const { isLoaded, login } = this.state;
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
      let menu = this.state.Menu;

      let cateList = [];
      let category = this.state.cate;
      for (let i = 0; i < category.length; i++) {
        try {
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
        } catch (error) {
          console.log(error);
        }
      }
      return (
        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
              ​<SideBar catelist={cateList}></SideBar>​
              <main className="col-md-9">
                <header className="border-bottom mb-4 pb-3">
                  <div className="form-inline">
                    <span className="mr-md-auto">
                      {menu.length} Items found{" "}
                    </span>
                    <span className="mr-md-auto"></span>
                    <div class="dropdown">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        {localStorage.getItem("conditionId")}
                      </button>
                      <div class="dropdown-menu">
                        <a
                          class="dropdown-item"
                          onClick={this.handleClickCondition("good")}
                        >
                          good
                        </a>
                        <a
                          class="dropdown-item"
                          onClick={this.handleClickCondition("click")}
                        >
                          click
                        </a>
                        <a
                          class="dropdown-item"
                          onClick={this.handleClickCondition("grade")}
                        >
                          grade
                        </a>
                        <a
                          class="dropdown-item"
                          onClick={this.handleClickCondition("review")}
                        >
                          review
                        </a>
                      </div>
                    </div>
                  </div>
                </header>

                <div className="row">{this.printMenuList()}</div>

                <nav className="mt-4" aria-label="Page navigation sample">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </main>
            </div>
          </div>
        </section>
      );
    }
  }
}
export default Home;
