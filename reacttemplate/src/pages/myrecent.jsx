import React from 'react';
import menuDataJson from './menudata.json';
import { Link } from 'react-router-dom';

class MyRecent extends React.Component {
  state = {
    myLike: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      menuDataJson,
    };
  }

  render() {
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
                          <Link to='/formPage'>개인정보수정 </Link>
                        </li>
                        <li>
                          <Link to='/mylike'>찜 목록 </Link>
                        </li>
                        <li>
                          <Link to='myrecent'>최근 본 메뉴 </Link>
                        </li>
                        <li>
                          <Link to='/myreview'>내 리뷰 관리 </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            
            {/* 이 부분 부터 바뀐다 */}
            <main className='col-md-9'>
              <header className='border-bottom mb-4 pb-3'>
                <div className='form-inline'>
                  <span className='mr-md-auto'>32 Items found </span>
                  <select className='mr-2 form-control'>
                    <option>추천순</option>
                    <option>조회순</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                </div>
              </header>

              <div className='card-columns'>
                {this.state.menuDataJson.map((coffee, i) => {
                  return (
                    <Link to='/review'>
                      <div className='card card-product-list'>
                        <div className='row no-gutters'>
                          <img className='card-img-top' src={menuDataJson[i]['menu.image']} alt='Card image' />
                          <div className='card-body'>
                            <h5 className='card-title'>{menuDataJson[i]['menu.name']}</h5>
                            <p className='text-success'>{menuDataJson[i]['cafe.name']}</p>

                            <ul className='rating-stars'>
                              <li className='stars-active w-80'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                              </li>
                              <span>{menuDataJson[i]['avgScore']}</span>
                            </ul>
                            <div className='price-wrap'>
                              <span className='price h5'>{menuDataJson[i]['menu.price']}원</span>
                            </div>
                            <br />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <nav className='mt-4' aria-label='Page navigation sample'>
                <ul className='pagination justify-content-center'>
                  <li className='page-item disabled'>
                    <a className='page-link' href='#'>
                      Previous
                    </a>
                  </li>
                  <li className='page-item active'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </main>
          </div>
        </div>
      </section>
    );
  }
}

export default MyRecent;
