import React, { Component } from 'react';
import { connect } from 'react-redux';
import { JWT_TOKEN } from '../../utils/Utils.jsx';
import Topbar from '../Topbar/Topbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Body from '../Body/Body.jsx';
import Login from '../Login/Login.jsx';
import Loading from '../Login/Loading.jsx';
import * as Storage from '../../utils/Storage.jsx';
import { setupLogginPage, setupUserToken } from '../../actions/HomeActions.jsx';

class Home extends Component {

  componentWillMount() {
     console.log('Home::Token:: ', Storage.getEntry(JWT_TOKEN));
    if(Storage.getEntry(JWT_TOKEN)){
        console.log('Home::setuplogintoken');
        this.props.setupUserToken();
    }else{
      this.props.setupLogginPage();
    }
  }

  renderHome(){
    if(this.props.authenticated == null){
      return (<Loading />)
    } else if(!this.props.authenticated){
      return (<Login />)
    }else{
     return (<div>
      <Topbar />
      <Body />
    </div>)
    }
  }
  render() {
    return (
      this.renderHome()
    )
  }
}

const mapStateToProps = ({ homeReducer }) => {
  const { username, email, isAdmin,authenticated } = homeReducer;
  return { username, email, isAdmin, authenticated };
};

export default connect(mapStateToProps, {
  setupUserToken, setupLogginPage
})(Home);