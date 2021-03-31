import React from "react";
import { Link } from "react-router-dom";
import menuDataJson from "./menudata.json";
import Page from "../components/layout/page";
import axios from "axios";
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

class Admin_Insert extends React.Component {
  //   post메소드에 들어가야 하는 값(insert) :
  // name, price, description, keyword, image, hot, ice, categoryId, cafeId
  constructor(props) {
    super(props);
    this.state = {
      categoryList: "",
      cafeList: "",

      menuName: "",
      price: 0,
      description: "",
      keyword: "",
      image: "",
      hot: 0,
      ice: 0,
      categoryId: 0,
      cafeId: 0,
    };
}
handleMenuName = (e) => {this.setState({menuName: e.target.value,});};
handlePrice = (e) => {this.setState({price: Number(e.target.value),});};
handleDescription = (e) => {this.setState({description: e.target.value,});};
handleKeyword = (e) => {this.setState({keyword: e.target.value,});};
handleImage = (e) => {this.setState({image: e.target.value,});};
handleCategoryId = (e) => {this.setState({categoryId: Number(e.target.value),});};
handleCafeId = (e) => {this.setState({cafeId: Number(e.target.value),});};
handleHot = () => {this.setState({hot: (this.state.hot^1)});};
handleIce = () => {this.setState({ice: (this.state.ice^1)});};

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

  // 메뉴 추가시 카테고리 선택 옵션
  setCategoryList() {
    let categoryList = [];
    let category = this.state.categoryList;

    for (let i = 0; i < category.length; i++) {
      try {
        categoryList.push(<option value={Number(category[i]["categoryId"])}>{category[i]["name"]}</option>);
      } catch (error) {
        console.log(error);
      }
    }
    return categoryList;
  }

  // 메뉴 추가시 카페 선택 옵션
  setCafeList() {
    let cafeList = [];
    let cafe = this.state.cafeList;

    for (let i = 0; i < cafe.length; i++) {
      try {
        cafeList.push(<option value={Number(cafe[i]["cafeId"])}>{cafe[i]["name"]}</option>);
      } catch (error) {
        console.log(error);
      }
    }
    return cafeList;
  }



  handleSubmit = (e) => {

    if (
      menuName === '' ||
      price === '' ||
      description === '' ||
      keyword === '' ||
      image === '' || 
      hot === '' || 
      ice === '' || 
      categoryId === '' || 
      cafeId === ''
    ) {
      alert("모든 입력을 완료해 주세요");
      return;
    }

    const menuInputApi = `http://localhost:9090/multicafe/api/admin/menu`;
    const {menuName, price, description, keyword, image, hot, ice, categoryId, cafeId} = this.state;
    const inputData = {
      menuName: menuName,
      price: price,
      description: description,
      keyword: keyword,
      image: image,
      hot: hot,
      ice: ice,
      categoryId: categoryId,
      cafeId: cafeId,
    };
    e.preventDefault();

    

    console.log(inputData);
    Promise.all([axios.post(menuInputApi, inputData)])
      .then(([res]) => {
        alert("메뉴추가완료");
        //console.log("post 성공");
      })
      .catch((err) => {
        alert("메뉴추가실패");
        console.log(err);
      });

    
    //window.location.replace('/review');
  };
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
                      data-target="#collapse_3"
                      aria-expanded="false"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">관리자페이지</h6>
                    </a>
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
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </aside>

            {/* adminPage */}
            {/* name, price, description, keyword, image, hot, ice, categoryId, cafeId */}
            <row>
              <Col xl={6} lg={12} md={12}>
                <Card style={{ width: "700px" }}>
                  <CardHeader>메뉴추가</CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="ex) 아메리카노"
                          onChange={this.handleMenuName}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePrice">Price</Label>
                        <Input
                          type="number"
                          name="price"
                          placeholder="ex) 4200"
                          onChange={this.handlePrice}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleDescription">Description</Label>
                        <Input
                          type="textarea"
                          name="Description"
                          onChange={this.handleDescription}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleCafeName">Keyword</Label>
                        <Input
                          type="text"
                          name="keyword"
                          placeholder="키워드"
                          onChange={this.handleKeyword}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleImagepath">image URL</Label>
                        <Input
                          type="url"
                          name="imageurl"
                          placeholder="image URL"
                          onChange={this.handleImage}
                        />
                      </FormGroup>
                      <FormGroup>
                        <button type="button" onClick={this.handleHot} className={(this.state.hot) == 1? "btn btn-danger btn-lg" : "btn btn-outline-danger btn-lg"} >
                          HOT
                        </button>
                        <button type="button" onClick={this.handleIce} className={(this.state.ice) == 1?"btn btn-primary btn-lg":"btn btn-outline-primary btn-lg"}>
                          ICE
                        </button>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect">카테고리</Label>
                        <Input
                          type="select"
                          name="categoryId"
                          onChange={this.handleCategoryId}
                        >
                          {this.setCategoryList()}
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">카페</Label>
                        <Input
                          type="select"
                          name="cafeId"
                          onChange={this.handleCafeId}
                        >
                          {this.setCafeList()}
                        </Input>
                      </FormGroup>
                      <FormGroup check row>
                        <Button>Submit</Button>
                      </FormGroup>
                    </Form>
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

export default Admin_Insert;
