import React from 'react';


class MyPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {like:"like"};
    }

    likeToggle = () =>{
        this.setState({like:"unlike"});
    }

    render(){
        return(
            <section className="section-content padding-y">
              <div className="container">
                  <div className="row">
                  <aside className="col-md-3">
                          
                          <div className="card" >
                              <article className="filter-group">
                                  <header className="card-header">
                                      <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                                          <i className="icon-control fa fa-chevron-down"></i>
                                          <h6 className="title">Product type</h6>
                                      </a>
                                  </header>
                                  <div className="filter-content collapse show" id="collapse_1">
                                      <div className="card-body">
                                          <form className="pb-3">
                                          <div className="input-group">
                                          <input type="text" className="form-control" placeholder="Search" />
                                          <div className="input-group-append">
                                              <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                                          </div>
                                          </div>
                                          </form>
                                          
                                          <ul className="list-menu">
                                              <li><a href="#">카테고리 1  </a></li>
                                              {/* <li><a href="#">찜 목록 </a></li>
                                              <li><a href="#">최근 본 메뉴  </a></li>
                                              <li><a href="#">내 리뷰 관리  </a></li>
                                              <li><a href="#">Home items </a></li>
                                              <li><a href="#">Animals</a></li>
                                              <li><a href="#">People </a></li> */}
                                          </ul>
                                      </div> 
                                  </div>
                              </article>
                              
                              <article className="filter-group">
                                  <header className="card-header">
                                      <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="false" className="">
                                          <i className="icon-control fa fa-chevron-down"></i>
                                          <h6 className="title">마이페이지 </h6>
                                      </a>
                                  </header>
                                  <div className="filter-content collapse in" id="collapse_4">
                                      <ul className="list-menu">
                                          <li><a href="#">개인정보수정 </a></li>
                                          <li><a href="#">찜 목록 </a></li>
                                          <li><a href="#">최근 본 메뉴  </a></li>
                                          <li><a href="#">내 리뷰 관리  </a></li>
                                      </ul>
                                  </div>
                              </article>
                              <article className="filter-group">
                                  <header className="card-header">
                                      <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" className="">
                                          <i className="icon-control fa fa-chevron-down"></i>
                                          <h6 className="title">관리자 </h6>
                                      </a>
                                  </header>
                                  <div className="filter-content collapse in" id="collapse_5">
                                      <ul className="list-menu">
                                          <li><a href="#">카페추가 </a></li>
                                          <li><a href="#">메뉴추가 </a></li>
                                          <li><a href="#">  </a></li>
                                          <li><a href="#">  </a></li>
                                      </ul>
                                  </div>
                              </article>
                          
                          </div> 
                      </aside>
                      {/* 이 부분 부터 바뀐다 */}
                      <main className="col-md-9">
                          <header className="border-bottom mb-4 pb-3">
                                  <div className="form-inline">
                                      <span className="mr-md-auto">32 Items found </span>
                                      <select className="mr-2 form-control">
                                          <option>추천순</option>
                                          <option>조회순</option>
                                          <option>Most Popular</option>
                                          <option>Cheapest</option>
                                      </select>
                                      
                                      
  
                                  </div>
                          </header>
  
                          <div className="cardmypage">                
                                <div class="row no-gutters">
                                    <aside class="col-md-3">
                                        <a href="#" class="img-wrap">
                                            <span class="badge badge-danger"> NEW </span>
                                            <img src="https://ediya.com/files/menu/IMG_1584942100701.png" />
                                        </a>
                                    </aside> 
                                    <div class="col-md-6">
                                        <div class="info-main">
                                            <a href="#" class="h5 title"> menu.name  </a>
                                            <div class="rating-wrap mb-3">
                                                <ul class="rating-stars">
                                                    <li  class="stars-active w-80"> 
                                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                                        <i class="fa fa-star"></i> 
                                                    </li>
                                                    <li>
                                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                                        <i class="fa fa-star"></i> 
                                                    </li>
                                                </ul>
                                                <div class="label-rating">review.grade</div>
                                            </div> 
                                            
                                            <p> review </p>
                                        </div>
                                    </div> 
                                    <aside class="col-sm-3">
                                        <div class="info-aside">
                                            <div class="price-wrap">
                                                <span class="price h5"> menu.price </span>  
                                                <del class="price-old"> $198</del>
                                            </div>
                                            <p class="text-success">카테고리?(category.name)</p>
                                            <br />
                                            <p>
                                                <a href="javascript:byeon()" class="btn btn-primary btn-block" > Details </a>
                                                <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                                                    <span class="text">Add to wishlist</span>
                                                </a>
                                            </p>
                                        </div> 
                                    </aside> 
                                </div> 
  
                              
  
                              
                          
                          </div>    
                      
                          <nav className="mt-4" aria-label="Page navigation sample">
                          <ul className="pagination justify-content-center">
                              <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                              <li className="page-item active"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item"><a className="page-link" href="#">Next</a></li>
                          </ul>
                          </nav>
                      </main>
                  </div>
              </div> 
          </section>
        )
    }
}

export default MyPage;