import React from "react";
import { Link } from "react-router-dom";
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

class Admin_Cafe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cafeList: [],
      cafeName: "",
      logoImage: "",
    };
  }

  componentDidMount() {
    const cafeApi = axios.get("http://localhost:9090/multicafe/api/cafe");

    Promise.all([cafeApi])
      .then(([res]) => {
        this.setState({
          cafeList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  printCafeList() {
    let cafes = [];
    let cafe = this.state.cafeList;

    for (let i = 0; i < cafe.length; i++) {
      cafes.push(
        <tr>
          <td>{cafe[i]["name"]}</td>
          <td>
            <img
              className="rounded"
              style={{ width: 100, height: 100 }}
              src={cafe[i]["image"]}
            />
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={(Id) => this.deleteCafe(cafe[i]["cafeId"])}
            >
              삭제
            </button>
          </td>
        </tr>
      );
    }
    return cafes;
  }

  insertCafe= () => {
    const cafeInsertApi = `http://localhost:9090/multicafe/api/admin/cafe`;
    const { cafeName, logoImage } = this.state;
    if (cafeName === "" || logoImage === "") {
      alert("모든 입력을 완료해 주세요");
      return;
    }

    const inputData = {
      cafeId: "",
      name: cafeName,
      image: logoImage,
    };
    
    Promise.all([axios.post(cafeInsertApi, inputData)])
      .then((res) => {
        alert("카페추가 성공!!");
      })
      .catch((err) => {
        console.log(err);
      });

    this.stateRefresh();
  }
  deleteCafe = (Id) => {
    //console.log(Id);
    if (window.confirm("카페를 삭제합니다.")) {
      let deleteApi = axios.delete(
        `http://localhost:9090/multicafe/api/admin/cafe/${Id}`
      );
      Promise.all([deleteApi])
        .then(([res]) => {
          alert("삭제 되었습니다.");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.stateRefresh();
  };

  stateRefresh = () => {
    this.setState({
      cafeList: [],
    });
    this.componentDidMount();
    this.printCafeList();
  };

  handleCafeName = (e) => {
    this.setState({ cafeName: e.target.value });
  };
  handleLogoImage = (e) => {
    this.setState({ logoImage: e.target.value });
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
                      <Link
                        data-toggle="collapse"
                        data-target="#collapse_1"
                        aria-expanded="false"
                        className=""
                      >
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">관리자페이지</h6>
                      </Link>
                    </header>
                    <div
                      className="filter-content collapse show"
                      id="collapse_1"
                    >
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

            {/* adminPage */}
            {/* name, price, description, keyword, image, hot, ice, categoryId, cafeId */}
            <row>
              <Col xl={6} lg={12} md={12}>
                <Card style={{ width: "700px" }}>
                  <CardHeader>카페 관리</CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Label for="exampleName">카페이름</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="ex) 스타벅스"
                          onChange={this.handleCafeName}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleImagepath">카페 로고</Label>
                        <Input
                          type="url"
                          name="imageurl"
                          placeholder="image URL"
                          onChange={this.handleLogoImage}
                        />
                      </FormGroup>
                      <Button onClick={this.insertCafe}>카페 추가</Button>
                    </Form>
                    <div>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>이름</th>
                            <th>이미지</th>
                            <th style={{ textAlign: "center" }}>삭제</th>
                          </tr>
                        </thead>
                        <tbody>{this.printCafeList()}</tbody>
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

export default Admin_Cafe;
