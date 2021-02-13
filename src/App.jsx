import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/layout/header.jsx";
import Comtent from "./components/layout/content.jsx";
import Footer from "./components/layout/footer.jsx";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Comtent/>
                <Footer/>
            </div>
        )
    }
}
export default App;