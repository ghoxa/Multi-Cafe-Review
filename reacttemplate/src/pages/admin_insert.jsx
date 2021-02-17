import React from "react";
import { Link } from "react-router-dom";
import menuDataJson from "./menudata.json";
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

class Admin_Insert extends React.Component {  
  state = {
    menuId: '',
    name: 'dd',
    price: '',
    description: '',
    grade: '',
    keyword: '',
    image: '',
    good: '',
    click: '',
    hot: '',
    ice: '',
    categoryId: 3003,
    cafeId: 2007,
    cafeName : '',
    sweet: '',
    bitter: '',
    sour: ''  
  };

  handleSubmit = () => {
    const { sweet, sour, bitter, grade, comment } = this.state;

    if (sweet === '' || sour === '' || bitter === '' || grade === '' || comment === '') {
      alert('모든 입력을 완료해 주세요');
      return;
    }

    const data = {
      reviewId:"",
      reviewDate:"",
      content: comment,
      good:"",
      grade: grade,
      userId:"",
      menuId:50000126,
      sweet:sweet,
      bitter:bitter,
      sour:sour
    };

    Promise.all([axios.post('/api/review', data)])
      .then(([res]) => {
        console.log('post 성공');
      })
      .catch((err) => {
        console.log(err);
      });

    alert('입력완료');
    //window.location.replace('/review');
  };
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
                <Card style={{width : "700px"}}>
                  <CardHeader>메뉴추가</CardHeader>
                  <CardBody >
                    <Form>
                      <FormGroup>
                        <Label for="exampleMenuId">MenuId</Label>
                        <Input
                          type="text"
                          name="menuId"
                          placeholder="아이스아메리카노"
                        />
                      </FormGroup>
                     
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
