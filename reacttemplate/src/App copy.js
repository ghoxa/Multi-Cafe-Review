import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-2 col-4">
                <a href="#" class="brand-wrap">
                  Company Name
                </a> 
            </div>
            <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                    <div class="input-group w-100">
                        <input type="text" class="form-control" placeholder="Search" />
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="submit">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                    </div>
                </form> 
            </div> 
            <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                    <div class="widget-header  mr-3">
                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                        <span class="badge badge-pill badge-danger notify">0</span>
                    </div>
                    <div class="widget-header icontext">
                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                        <div class="text">
                            <span class="text-muted">Welcome!</span>
                            <div> 
                                <a href="#">Sign in</a> |  
                                <a href="#"> Register</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
            </div> 
        </section>
        </header> 
       
        <section class="section-pagetop bg">
        <div class="container">
            {/* <h2 class="title-page">Category products</h2>
            <nav>
            <ol class="breadcrumb text-white">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Best category</a></li>
                <li class="breadcrumb-item active" aria-current="page">Great articles</li>
            </ol>  
            </nav> */}
            <nav class="mt-4" aria-label="Page navigation sample">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">cafe.name</a></li>
                    <li class="page-item"><a class="page-link" href="#">cafe.name</a></li>
                </ul>
            </nav>

        </div> 
        </section>
      
        <section class="section-content padding-y">
        <div class="container">
        <div class="row">
            <aside class="col-md-3">
                
        <div class="card" >
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Product type</h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_1">
                    <div class="card-body">
                        <form class="pb-3">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search" />
                          <div class="input-group-append">
                            <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                          </div>
                        </div>
                        </form>
                        
                        <ul class="list-menu">
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
            {/* <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Brands </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_2">
                    <div class="card-body">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Mercedes  
                              <b class="badge badge-pill badge-light float-right">120</b>  </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Toyota 
                              <b class="badge badge-pill badge-light float-right">15</b>  </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Mitsubishi 
                              <b class="badge badge-pill badge-light float-right">35</b> </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Nissan 
                              <b class="badge badge-pill badge-light float-right">89</b> </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Honda 
                              <b class="badge badge-pill badge-light float-right">30</b>  </div>
                        </label>
            </div> 
                </div>
            </article> 
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Price range </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_3">
                    <div class="card-body">
                        <input type="range" class="custom-range" min="0" max="100" name="" />
                        <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>Min</label>
                          <input class="form-control" placeholder="$0" type="number" />
                        </div>
                        <div class="form-group text-right col-md-6">
                          <label>Max</label>
                          <input class="form-control" placeholder="$1,0000" type="number" />
                        </div>
                        </div> 
                        <button class="btn btn-block btn-primary">Apply</button>
                    </div>
                </div>
            </article> 
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Sizes </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_4">
                    <div class="card-body">
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XS </span>
                      </label>
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> SM </span>
                      </label>
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> LG </span>
                      </label>
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XXL </span>
                      </label>
                    </div>
                </div>
            </article> */}
            
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">More filter </h6>
                    </a>
                </header>
                <div class="filter-content collapse in" id="collapse_5">
                    <ul class="list-menu">
                        <li><a href="#">개인정보수정 </a></li>
                        <li><a href="#">찜 목록 </a></li>
                        <li><a href="#">최근 본 메뉴  </a></li>
                        <li><a href="#">내 리뷰 관리  </a></li>
                    </ul>
                </div>
            </article>  
        </div> 
            </aside> 
            <main class="col-md-9">
        <header class="border-bottom mb-4 pb-3">
                <div class="form-inline">
                    <span class="mr-md-auto">32 Items found </span>
                    <select class="mr-2 form-control">
                        <option>추천순</option>
                        <option>조회순</option>
                        <option>Most Popular</option>
                        <option>Cheapest</option>
                    </select>
                    <div class="btn-group">
                        <a href="#" class="btn btn-outline-secondary active" data-toggle="tooltip" title="List view"> 
                            <i class="fa fa-bars"></i></a>
                        <a href="#" class="btn  btn-outline-secondary" data-toggle="tooltip" title="Grid view"> 
                            <i class="fa fa-th"></i></a>
                    </div>
                    

                </div>
        </header>
        {/* card1 */}
        <article class="card card-product-list">
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
                            <a href="#" class="btn btn-light btn-block">
                                <i class="fa fa-heart"></i>
                                <span class="text">Add to wishlist</span>
                            </a>
                        </p>
                    </div> 
                </aside> 
            </div> 
        </article> 
        {/* card1 */}
        {/* card2 */}
        <article class="card card-product-list">
            <div class="row no-gutters">
                <aside class="col-md-3">
                    <a href="#" class="img-wrap">
                        <span class="badge badge-danger" > NEW </span>
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
                        
                        <p> menu.description </p>
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
                            <a href="#" class="btn btn-light btn-block">
                                <i class="fa fa-heart"></i>
                                <span class="text">Add to wishlist</span>
                            </a>
                        </p>
                    </div> 
                </aside> 
            </div> 
        </article> 
        {/* card2 */}
        {/* card3 */}
        <article class="card card-product-list">
            <div class="row no-gutters">
                <aside class="col-md-3">
                    <a href="#" class="img-wrap">
                        <span class="badge badge-danger" > NEW </span>
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
                        
                        <p> menu.description </p>
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
                            <a href="#" class="btn btn-light btn-block">
                                <i class="fa fa-heart"></i>
                                <span class="text">Add to wishlist</span>
                            </a>
                        </p>
                    </div> 
                </aside> 
            </div> 
        </article> 
        {/* card3 */}
        {/* <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="assets/images/items/4.jpg" /></a>
            </aside> 
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Great product name goes here  </a>
                    <div class="rating-wrap mb-3">
                        <ul class="rating-stars">
                            <li class="stars-active w-80"> 
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
                        <div class="label-rating">7/10</div>
                    </div> 
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div> 
            </div> 
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $56 </span>  
                        <del class="price-old"> $85</del>
                    </div> 
                    <p class="text-success">Free shipping</p>
                    <br />
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span></a>
                    </p>
                </div> 
            </aside> 
        </div> 
    </article> 
    
    <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="assets/images/items/5.jpg" /></a>
            </aside> 
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Great product name goes here  </a>
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
                        <div class="label-rating">7/10</div>
                    </div>
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div>
            </div> 
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $56.00 </span>  
                    </div>
                    <p class="text-success">Free shipping</p>
                    <br />
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span>
                        </a>
                    </p>
                </div> 
            </aside>
        </div>
    </article>     
    
    <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="assets/images/items/6.jpg" /></a>
            </aside> 
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Product name can be here  </a>
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
                        <div class="label-rating">7/10</div>
                    </div>
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div> 
            </div> 
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $62 </span>  
                    </div> 
                    <p class="text-success">Free shipping</p>
                    <br />
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span> 
                        </a>
                    </p>
                </div> 
            </aside> 
        </div> 
    </article>  */}
        <nav class="mt-4" aria-label="Page navigation sample">
          <ul class="pagination">
            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
            </main>
        </div>
        </div> 
        </section>
        
        <footer class="section-footer border-top padding-y">
            <div class="container">
                <p class="float-md-right"> 
                    &copy; Copyright 2021 All rights reserved
                </p>
                <p>
                    <a href="#">Terms and conditions</a>
                </p>
            </div>
        </footer>
       
     
    </div>

  );
}
export default App;