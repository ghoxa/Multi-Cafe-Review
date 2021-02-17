import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/layout/page";
import axios from 'axios';
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
      menu: []
    };
  }
  
  componentDidMount() {
    const menuId = localStorage.get('menuId');
    Promise.all([axios.get(`http://localhost:9090/multicafe/api/menu/${menuId}`)])
       .then(([res]) => {
         this.setState({
           menu: res.data,
         });
       })
       .catch((err) => {
         console.log(err);
       });
  }
  searchMenu = () => {
    const menuId = localStorage.getItem('menuId');
    Promise.all([axios.get(`http://localhost:9090/multicafe/api/menu/${menuId}`)])
    .then((res) => {
      this.setState({
        data: res[0].data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deleteMenu = () => {
    const menuId = localStorage.getItem('menuId');
    Promise.all([axios.get(`http://localhost:9090/multicafe/api/admin/menu/${menuId}`)])
    .then((res) => {
      this.setState({

      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  updateMenu = () => {
    Promise.all([axios.put(`http://localhost:9090/multicafe/api/admin/menu`)])
    .then((res) => {
      this.setState({
        
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
          <aside className='col-md-3'>
              <div className='card'>
                  <article className='filter-group'>
                  <header className='card-header'>
                    <a href='#' data-toggle='collapse' data-target='#collapse_3' aria-expanded='false' className=''>
                      <i className='icon-control fa fa-chevron-down'></i>
                      <h6 className='title'>관리자페이지</h6>
                    </a>
                  </header>
                  <div className='filter-content collapse show' id='collapse_3'>
                    <div className='card-body'>
                      <ul className='list-menu'>
                        <li>
                          <Link to ="/admin_insert">
                            메뉴 추가
                          </Link>
                        </li>
                        <li>
                          <Link to ="/admin_update">
                            메뉴 수정
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            {/* adminPage */}
            <row>
              <Col xl={6} lg={12} md={12}>
                <Card style={{ width: "700px" }}>
                  <CardHeader>메뉴수정</CardHeader>
                  <CardBody>
                    <Form>
                      <Label for="exampleMenuId">MenuId</Label>
                      <Form inline>
                        <FormGroup>
                          <Input
                            type="text"
                            name="menuId"
                            placeholder="something@idk.cool"
                          />
                        </FormGroup>{" "}
                        <Button onClick={this.searchMenu}>검색</Button>
                      </Form>
                      <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleCafeName">카페이름</Label>
                        <Input
                          type="text"
                          name="cafeName"
                          placeholder="스타벅스"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePrice">Price</Label>
                        <Input
                          type="number"
                          name="price"
                          placeholder="url placeholder"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleImagepath">imagepath</Label>
                        <Input
                          type="url"
                          name="imagepath"
                          placeholder="url placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">HOT</Label>
                        <Input type="select" name="select">
                          <option>X</option>
                          <option>O</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">ICE</Label>
                        <Input type="select" name="select">
                          <option>X</option>
                          <option>O</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">카테고리아이디</Label>
                        <Input type="select" name="select">
                          <option>커피</option>
                          <option>스무디</option>
                          <option>~~</option>
                          <option>@</option>
                          <option>!!</option>
                          <option>##</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleDescription">Description</Label>
                        <Input
                          type="textarea"
                          name="Description"
                          placeholder="number placeholder"
                        />
                      </FormGroup>
                      <Form inline>
                        <Button onClick={this.updateMenu}>수정</Button>
                        <Button onClick={this.deleteMenu}>삭제</Button>
                      </Form>
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

export default Admin_Update;
