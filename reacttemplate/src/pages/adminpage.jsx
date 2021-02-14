import React from 'react';
import { Link } from 'react-router-dom';
import menuDataJson from './menudata.json';

class AdminPage extends React.Component {
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
                            <a href='#' data-toggle='collapse' data-target='#collapse_3' aria-expanded='false' className=''>
                            <i className='icon-control fa fa-chevron-down'></i>
                            <h6 className='title'>관리자페이지</h6>
                            </a>
                        </header>
                        <div className='filter-content collapse show' id='collapse_3'>
                            <div className='card-body'>
                            <ul className='list-menu'>
                                <li>
                                <a href='#'>메뉴 추가 </a>
                                </li>
                                <li>
                                <a href='#'>메뉴 삭제 </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </article>
                    </div>
                    </aside>

                    <aside className='col-md-9'>
                        
                    </aside>
                </div>
            </div>
        </section>
    );
  }
}

export default AdminPage;