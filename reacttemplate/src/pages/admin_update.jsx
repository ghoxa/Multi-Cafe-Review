import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/layout/page";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { Table } from "react-bootstrap";
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

class Admin_Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: "",
      cafeList: "",

      // menuName: "",
      // price: 0,
      // description: "",
      keyword: "",
      // image: "",
      // hot: 0,
      // ice: 0,
      categoryId: 0,
      cafeId: 0,
      isLoaded: true,
    };
  }
  handleCafeId = (e) => {
    this.setState({
      cafeId: Number(e.target.value),
    });
  };
  handleCategoryId = (e) => {
    this.setState({
      categoryId: Number(e.target.value),
    });
  };
  handleKeyword = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  componentDidMount() {
    const categoryListApi = axios.get(
      `http://localhost:9090/multicafe/api/category`
    );
    const cafeListApi = axios.get("http://localhost:9090/multicafe/api/cafe");
    Promise.all([categoryListApi, cafeListApi])
      .then(([res, res2]) => {
        this.setState({
          categoryList: res.data,
          cafeList: res2.data,

          categoryId: Number(res.data[0]["categoryId"]),
          cafeId: Number(res2.data[0]["cafeId"]),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 메뉴 검색시 카테고리 선택 옵션
  setCategoryList() {
    let categoryList = [<option value={0}>전체 카테고리</option>];
    let category = this.state.categoryList;

    for (let i = 0; i < category.length; i++) {
      try {
        categoryList.push(
          <option value={Number(category[i]["categoryId"])}>
            {category[i]["name"]}
          </option>
        );
      } catch (error) {
        console.log(error);
      }
    }
    return categoryList;
  }

  // 메뉴 검색시 카페 선택 옵션
  setCafeList() {
    let cafeList = [<option value={0}>전체 카페</option>];
    let cafe = this.state.cafeList;

    for (let i = 0; i < cafe.length; i++) {
      try {
        cafeList.push(
          <option value={Number(cafe[i]["cafeId"])}>{cafe[i]["name"]}</option>
        );
      } catch (error) {
        console.log(error);
      }
    }
    return cafeList;
  }

  handleSerchSelect = (e) => {
    this.setState({
      menuList: [],
      isLoaded: false,
    });
    this.callMenuListSelect();
    this.printMenuList();
  };

  handleSerchKeyword = (e) => {
    this.setState({
      menuList: [],
      isLoaded: false,
    });
    this.callMenuListSerch();
    this.printMenuList();
  };

  callMenuListSelect = async () => {
    let menuApi = `http://localhost:9090/multicafe/api/menu`;
    const { cafeId, categoryId } = this.state;
    if (cafeId == 0) {
      if (categoryId == 0) {
        alert("한개 이상 선택!");
      } else {
        menuApi = `http://localhost:9090/multicafe/api/menu/category/${categoryId}`;
      }
    } else {
      if (categoryId == 0) {
        menuApi = `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}`;
      } else {
        menuApi = `http://localhost:9090/multicafe/api/menu/cafe/${cafeId}/category/${categoryId}`;
      }
    }
    const res = await axios.get(menuApi);
    //console.log(menuApi);
    this.setState({
      menuList: res.data,
      isLoaded: true,
    });
  };
  callMenuListSerch = async () => {
    let menuApi = ``;
    const { keyword } = this.state;

    this.setState({
      isLoaded: false,
    });

    if (keyword === "") {
      alert("키워드를 입력해주세요");
      return;
    } else {
      menuApi = `http://localhost:9090/multicafe/api/menu/search/${keyword}`;
    }
    console.log(menuApi);
    const res = await axios.get(menuApi);
    this.setState({
      menuList: res.data,
      isLoaded: true,
    });
  };
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
      let menu = this.state.menuList;
      //console.log(menu[0]["name"]);
      for (let i = 0; i < menu.length; i++) {
        menulist.push(
          <tr>
            <td>{menu[i]["name"]}</td>
            <td>{menu[i]["name"]}</td>
            <td>{menu[i]["name"]}</td>
            <td>{menu[i]["name"]}</td>
            <td>{menu[i]["name"]}</td>
            <td>{menu[i]["name"]}</td>
          </tr>
        );
      }
      return menulist;
    }
  }

  render() {
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
                      data-target="#collapse_1"
                      aria-expanded="false"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">관리자페이지</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_1">
                    <div className="card-body">
                      <ul className="list-menu">
                        <li>
                          <Link to="/admin_insert">메뉴 추가</Link>
                        </li>
                        <li>
                          <Link to="/admin_update">메뉴 수정</Link>
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
                      <h6 className="title">카페&카테고리로 검색</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_2">
                    <div className="card-body">
                      <div>
                        <div>
                          <Label for="examplePrice">
                            카페& 카테고리로 검색
                          </Label>
                          <Input
                            type="select"
                            name="categoryId"
                            onChange={this.handleCafeId}
                          >
                            {this.setCafeList()}
                          </Input>
                          <Input
                            type="select"
                            name="categoryId"
                            onChange={this.handleCategoryId}
                          >
                            {this.setCategoryList()}
                          </Input>
                          <button onClick={this.handleSerchSelect}>검색</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_3"
                      aria-expanded="false"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">키워드로 검색</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_3">
                    <div className="card-body">
                      <div>
                        <Label for="examplePrice">키워드로 검색</Label>

                        <Input
                          type="text"
                          name="keyword"
                          placeholder="키워드"
                          onChange={this.handleKeyword}
                        />
                        <button onClick={this.handleSerchKeyword}>검색</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            {/* adminPage */}
            {/* name, price, description, keyword, image, hot, ice, categoryId, cafeId */}
            <row>
              <Col xl={12} lg={12} md={12}>
                <Card style={{ width: "800px" }}>
                  <CardHeader>메뉴검색</CardHeader>
                  <CardBody>
                    <div>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>카페</th>
                            <th>메뉴</th>
                            <th>가격</th>
                            <th>키워드</th>
                            <th>평점</th>
                            <th style={{ textAlign: "center" }}>수정</th>
                            <th style={{ textAlign: "center" }}>삭제</th>
                          </tr>
                        </thead>
                        <tbody>{this.printMenuList}</tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </row>
          </div>
        </div>
      </section>
    );
  }
}

export default Admin_Update;
