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
    };
  }

  checkLogid = () => {
    alert("로그인을 해주세요!");
  };

  handleClickMenu = (value) => () => {
    localStorage.setItem("menuId", value);
    window.location.replace("/review");
  };

  // handleClickCategory = (value) => () => {
  //   localStorage.setItem("categoryId", value);
  //   localStorage.setItem("keyword", 0);

  //   this.stateRefresh();
  // };

  handleClickCondition = (value) => () => {
    localStorage.setItem("conditionId", value);

    this.stateRefresh();
  };

  handleClickPageNo = (No) => () =>{
    localStorage.setItem("pageNo", No);
    this.stateRefresh();
  }

  // handleClickSerch = () => {
  //   localStorage.setItem("categoryId", 0);

  //   this.stateRefresh();
  // };

  componentDidMount() {
    localStorage.setItem("mapId", "all");
    localStorage.setItem("pageNo", 1);
    let menuApi = axios.get(`http://localhost:9090/multicafe/api/menu/list/1`);
    
    Promise.all([menuApi])
      .then(([res]) => {
        this.setState({
          Menu: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 메뉴목록만 새로고침
  stateRefresh = () => {
    this.setState({
      Menu: [],
      isLoaded: false,
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
    const pageNo = localStorage.getItem("pageNo");

    let menuApi = "";
    if (cafeId == 0) {
      //모든 카페
      if (categoryId == 0 && keyword == 0) {
        // 모든 카테고리
        menuApi = `http://localhost:9090/multicafe/api/menu/list/${conditionId}/${pageNo}`;
      } else if (categoryId == 0 && keyword != 0) {
        //키워드 검색
        menuApi = `http://localhost:9090/multicafe/api/menu/search/${keyword}/${conditionId}/${pageNo}`;
      } else if (categoryId != 0) {
        //카테고리 선택
        menuApi = `http://localhost:9090/multicafe/api/menu/category/${categoryId}/${conditionId}/${pageNo}`;
      }
    } else if (cafeId != 0) {
      // 카페선택
      if (categoryId == 0 && keyword == 0) {
        // 모든 카테고리
        menuApi = `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/${conditionId}/${pageNo}`;
      } else if (categoryId == 0 && keyword != 0) {
        //키워드 검색
        menuApi = `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/search/${keyword}/${conditionId}/${pageNo}`;
      } else if (categoryId != 0) {
        //카테고리 선택
        menuApi = `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/category/${categoryId}/${conditionId}/${pageNo}`;
      }
    } else {
      alert("예외상황!!");
    }
    console.log(menuApi)
    const res = await axios.get(menuApi);
    this.setState({
      Menu: res.data,
      isLoaded: true,
    });
    //console.log(this.state.Menu)
  };

  printPageNav() {
    const { Menu } = this.state;
    const pageNo = localStorage.getItem("pageNo");

    let pageList = []

    if (Menu.prev == 0)
      pageList.push(<li className="page-item disabled">
        <a className="page-link" href="#">Previous</a>
      </li>
      )
    else {
      pageList.push(<li className="page-item">
        <a className="page-link" href="#" onClick={this.handleClickPageNo(Menu.prev)}>
          Previous</a>
      </li>
      )
    }

    for(let i=Menu.start; i<= Menu.end; i++){
      if (pageNo == i){
        pageList.push(
          <li className="page-item active">
            <a className="page-link" href="#" onClick={this.handleClickPageNo(i)}>{i}</a>
          </li>
        )
      }
      else{
        pageList.push(
          <li className="page-item">
            <a className="page-link" href="#" onClick={this.handleClickPageNo(i)}>{i}</a>
          </li>
        )
      }
    }
    
    if (Menu.next == 0)
      pageList.push(<li className="page-item disabled">
        <a className="page-link" href="#">
          Next</a>
      </li>
      )
    else {
      pageList.push(<li className="page-item">
        <a className="page-link" href="#" onClick={this.handleClickPageNo(Menu.next)}>
          Next</a>
      </li>
      )
    }
    return (
      <ul className="pagination justify-content-center">
        {pageList}
      </ul>
    )
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
      return (
        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
            ​<SideBar stateRefresh={this.stateRefresh}></SideBar>​
              <main className="col-md-9">
                <header className="border-bottom mb-4 pb-3">
                  <div className="form-inline">
                    <span className="mr-md-auto">
                       Items found{" "}
                      {/* {menu.length} Items found{" "} */}
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
                        <a class="dropdown-item" onClick={this.handleClickCondition("good")}>good</a>
                        <a class="dropdown-item" onClick={this.handleClickCondition("click")}>click</a>
                        <a class="dropdown-item" onClick={this.handleClickCondition("grade")}>grade</a>
                        <a class="dropdown-item" onClick={this.handleClickCondition("review")}>review</a>                        
                      </div>
                    </div>
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
export default Home;
