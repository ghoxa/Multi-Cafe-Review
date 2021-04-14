import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Css/writeReview.module.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from '@material-ui/core/Button';
import axios from "axios";
import {Input} from "reactstrap";

class ModifyReview extends Component {
  state = {
    categoryList: "",
    cafeList: "",
    menuId: 0,

    menuName: "",
    price: 0,
    description: "",
    keyword: "",
    image: "",
    hot: 0,
    ice: 0,
    categoryId: 0,
    cafeId: 0,

    open: false,
  };

  handleMenuName = (e) => {this.setState({menuName: e.target.value,});};
  handlePrice = (e) => {this.setState({price: Number(e.target.value),});};
  handleDescription = (e) => {this.setState({description: e.target.value,});};
  handleKeyword = (e) => {this.setState({keyword: e.target.value,});};
  handleImage = (e) => {this.setState({image: e.target.value,});};
  handleCategoryId = (e) => {this.setState({categoryId: Number(e.target.value),});};
  handleCafeId = (e) => {this.setState({cafeId: Number(e.target.value),});};
  handleHot = () => {this.setState({hot: (this.state.hot^1)});};
  handleIce = () => {this.setState({ice: (this.state.ice^1)});};
  handleClickOpen = (e) => {
    this.setState({open: true,});
    console.log(e)
  };
  handleClose = () => {
    this.setState({
      menuName: "",
      price: 0,
      description: "",
      keyword: "",
      image: "",
      hot: 0,
      ice: 0,
      categoryId: 0,
      cafeId: 0,
      open: false,
    });
  };
  componentDidMount() {
    const categoryListApi = axios.get(`http://localhost:9090/multicafe/api/category`);
    const cafeListApi = axios.get("http://localhost:9090/multicafe/api/cafe");    
    
    Promise.all([categoryListApi, cafeListApi])
      .then(([res, res2]) => {
        this.setState({
          categoryList: res.data,
          cafeList: res2.data,
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

  handleCallMenu(Id){
    const menuApi = axios.get(`http://localhost:9090/multicafe/api/menu/${Id}`);

    Promise.all([menuApi])
      .then(([res]) => {
        this.setState({
          menuName: res.data.name,
          price: res.data.price,
          description: res.data.description,
          keyword: res.data.keyword,
          image: res.data.image,
          hot: res.data.hot,
          ice: res.data.ice,
          categoryId: res.data.categoryId,
          cafeId: res.data.cafeId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit(e) {
    const {
      menuName,
      price,
      description,
      keyword,
      image,
      hot,
      ice,
      categoryId,
      cafeId
    } = this.state;

    if (
      menuName === "" ||
      price === "" ||
      description === "" ||
      keyword === "" ||
      image === "" ||
      hot === "" ||
      ice === "" ||
      categoryId === "" ||
      cafeId === ""
    ) {
      alert("모든 입력을 완료해 주세요");
      return;
    }

    const setData = {
      menuName: menuName,
      price: price,
      description: description,
      keyword: keyword,
      image: image,
      hot: hot,
      ice: ice,
      categoryId: categoryId,
      cafeId: cafeId,
    }
    console.log(setData)
    Promise.all([axios.put(`http://localhost:9090/multicafe/api/admin/menu`, setData)])
      .then((res) => {
        alert('메뉴수정 성공!!');
        this.props.stateRefresh();
        this.setState({
          menuName: "",
          price: 0,
          description: "",
          keyword: "",
          image: "",
          hot: 0,
          ice: 0,
          categoryId: 0,
          cafeId: 0,
          open: false,
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          수정
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth={true}
        >
          <DialogTitle>Menu ModifyForm</DialogTitle>

          <DialogContent>
            <div className={styles.ratingForm}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label for="exampleName">Name</Form.Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.menuName}
                    onChange={this.handleMenuName}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label for="examplePrice">Price</Form.Label>
                  <Input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handlePrice}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label for="exampleDescription">Description</Form.Label>
                  <Input
                    type="textarea"
                    name="Description"
                    value={this.state.description}
                    onChange={this.handleDescription}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label for="exampleCafeName">Keyword</Form.Label>
                  <Input
                    type="text"
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.handleKeyword}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label for="exampleImagepath">image URL</Form.Label>
                  <Input
                    type="url"
                    name="imageurl"
                    value={this.state.image}
                    onChange={this.handleImage}
                  />
                </Form.Group>
                <Form.Group>
                  <button
                    type="button"
                    onClick={this.handleHot}
                    className={
                      this.state.hot == 1
                        ? "btn btn-danger btn-lg"
                        : "btn btn-outline-danger btn-lg"
                    }
                  >
                    HOT
                  </button>
                  <button
                    type="button"
                    onClick={this.handleIce}
                    className={
                      this.state.ice == 1
                        ? "btn btn-primary btn-lg"
                        : "btn btn-outline-primary btn-lg"
                    }
                  >
                    ICE
                  </button>
                </Form.Group>

                <Form.Group>
                  <Form.Label for="exampleSelect">카테고리</Form.Label>
                  <Input
                    type="select"
                    name="categoryId"
                    onChange={this.handleCategoryId}
                    value={this.state.categoryId}
                  >
                    {this.setCategoryList()}
                  </Input>
                </Form.Group>
                <Form.Group>
                  <Form.Label for="exampleSelect">카페</Form.Label>
                  <Input
                    type="select"
                    name="cafeId"
                    onChange={this.handleCafeId}
                    value={this.state.cafeId}
                  >
                    {this.setCafeList()}
                  </Input>
                </Form.Group>
              </Form>
            </div>
          </DialogContent>

          <DialogActions>
          <Button
              variant="contained"
              color="primary"
              onClick={(e) => this.handleCallMenu(this.props.menuId)}
            >
              불러오기
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => this.handleSubmit(this.props.menuId)}
            >
              수정
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default ModifyReview;
