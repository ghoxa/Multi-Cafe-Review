import React from 'react';
import axios from 'axios';
class SignOut extends React.Component {

    componentDidMount() {
        localStorage.setItem('isLogin', false);
        Promise.all([axios.get('/api/login')])
        .then(([res]) => {
            console.log(res);
            console.log("get성공");            
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        alert('로그아웃');
        window.location.replace('/');
        return(
            <>
            </>
        );
    }
}

export default SignOut;