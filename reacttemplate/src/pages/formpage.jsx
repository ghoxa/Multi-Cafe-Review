import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from 'reactstrap';

const FormPage = () => {
  let user = localStorage.getItem("userInfo")
  console.log(user)

  return (
    <section className='section-content padding-y'>
      <div className='container'>
        <div className='row'>
          <aside className='col-md-3'>
            <div className='card'>
                <article className='filter-group'>
                  <header className='card-header'>
                    <a href='#' data-toggle='collapse' data-target='#collapse_2' aria-expanded='false' className=''>
                      <i className='icon-control fa fa-chevron-down'></i>
                      <h6 className='title'>마이페이지</h6>
                    </a>
                  </header>
                  <div className='filter-content collapse show' id='collapse_2'>
                    <div className='card-body'>
                      <ul className='list-menu'>
                        <li>
                          <Link to='/formPage'>개인정보수정</Link>
                        </li>
                        <li>
                          <Link to='/mylike'>찜 목록 </Link>
                        </li>
                        <li>
                          <Link to='/myrecent'>최근 본 메뉴 </Link>
                        </li>
                        <li>
                          <Link to='/myreview'>내 리뷰 관리</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
            </div>
          </aside>
              
          <main className='col-md-9'>
            <Card>
              <CardHeader>Form Grid</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for='exampleId' sm={2}>
                      Id
                    </Label>
                    <Col sm={10}>
                      <Input type='id' name='id' placeholder='id placeholder' value={user.userId}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='examplePassword' sm={2}>
                      Password
                    </Label>
                    <Col sm={10}>
                      <Input type='password' name='password' placeholder='password placeholder' />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='exampleEmail' sm={2}>
                      Email
                    </Label>
                    <Col sm={10}>
                      <Input type='email' name='email' placeholder='with a placeholder' />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='exampleEmail' sm={2}>
                      Phone Number
                    </Label>
                    <Col sm={10}>
                      <Input type='text' name='phonenumber' placeholder='with a placeholder' />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for='exampleAddress' sm={2}>
                      Address
                    </Label>
                    <Col sm={10}>
                      <Input type='text' name='address' placeholder='address placeholder' />
                    </Col>
                  </FormGroup>

                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button>Submit</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </main>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
