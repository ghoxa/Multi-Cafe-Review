import React from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import cafeListJson from './cafeList.json';
import axios from 'axios';
import { ThemeProvider } from 'react-bootstrap';

const cafeList = '/api/cafe';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cafeListJson,
    };
  }

  cafeLogoMount() {
    Promise.all([axios.get(cafeList)])
      .then(([res]) => {
        this.setState({
          Test: res.data,
        });

        console.log(this.state.Test);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { logged, onLogout } = this.props;

    return (
      <div>
        <header className='section-header'>
          <section className='header-main border-bottom'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-2 col-4'>
                  <Link to='/home' className='brand-wrap'>
                    {' '}
                    Home
                  </Link>
                </div>
                <div className='col-lg-6 col-sm-12'>
                  {/* <form action="#" className="search">
                                  <div className="input-group w-100">
                                      <input type="text" className="form-control" placeholder="Search" />
                                      <div className="input-group-append">
                                      <button className="btn btn-primary" type="submit">
                                          <i className="fa fa-search"></i>
                                      </button>
                                      </div>
                                  </div>
                              </form>  */}
                </div>
                <div className='col-lg-4 col-sm-6 col-12'>
                  <div className='widgets-wrap float-md-right'>
                    <div className='widget-header  mr-3'>
                      <a href='#' className='icon icon-sm rounded-circle border'>
                        <i className='fa fa-shopping-cart'></i>
                      </a>
                      <span className='badge badge-pill badge-danger notify'>0</span>
                    </div>
                    <div className='widget-header icontext'>
                      <Link to='/formPage' className='icon icon-sm rounded-circle border'>
                        <i className='fa fa-user'></i>
                      </Link>
                      <div className='text'>
                        <span className='text-muted'>Welcome!</span>
                        <div>
                          {/*<Link to='/' onClick={onLogout}>Logout</Link>*/} 
                          <Link to='./signin'>Sign in</Link>
                          |<Link to='./register'> Register</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>

        <section className='section-pagetop bg'>
          <div className='container'>
            <nav className='mt-4' aria-label='Page navigation sample'>
              <Swiper
                // spaceBetween={0}
                slidesPerView={7}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {this.state.cafeListJson.map((cafe, i) => {
                  return (
                    <SwiperSlide>
                      <div>
                        <img className='rounded-circle' style={{ width: 100, height: 100 }} src={cafeListJson[i]['logoImg']} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
