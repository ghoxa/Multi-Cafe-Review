import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <footer className="section-footer border-top padding-y">
              <div className="container">
                  <p className="float-md-right"> 
                      &copy; Copyright 2021 All rights reserved
                  </p>
                  <p>
                      <a href="#">Terms and conditions</a>
                  </p>
              </div>
          </footer>
        );
    }
}

export default Footer;