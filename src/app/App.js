import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Signin from './components/signin';
import Loader from './components/loader';
import {connect} from "react-redux";

class App extends React.Component {

  constructor(props){
    super(props);

  
    this.checkForIsLogin = this.checkForIsLogin.bind(this);
    this.userLogout = this.userLogout.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
  }

  componentWillMount(){
   
  }
  
  startLoading = () => {
   
  }
  stopLoading = () => {
    
  }

  checkForIsLogin = (email,pass) => {
    
    
  }
  
  userLogout = () => {
    
  }


  render() {
    let show = null;
    if(this.props.islogin){
      show = <div><Header /*userLogoutFunc={this.userLogout}*/ /><Body/></div>;      
    } else {
      show = <Signin /*userSignin={this.checkForIsLogin}*/ />;
    }
    return (
        <div>
          <Loader isVisible = {false}/>
          {show}          
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    islogin: state.userReducer.islogin
  };
};

export default connect(mapStateToProps)(App);
