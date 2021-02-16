import React from 'react';

class SignOut extends React.Component {
    render() {
        localStorage.setItem('isLogin', false);
        return(
            <>
            </>
        );
    }
}

export default SignOut;
() => {
    Promise.all([axios.get('/api/login')])
    .then(([res]) => {
      //localStorage.setItem('isLogin', false);
      window.location.replace('/');
    })
    .catch((err) => {
      console.log(err);
    });
  }