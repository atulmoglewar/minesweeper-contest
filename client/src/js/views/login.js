import React from 'react';
import BG from './bg';
import * as Page from '../data/config/routes.js'
import Header from './header'
import LoginDialog from './loginDialog'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let routes = [Page.Routes.home, Page.Routes.practice, 
    Page.Routes.leaderboard, Page.Routes.help]
    return (
      <div>
        <BG transparent="true"/>
        <Header links={routes}/>
        <div className="loginScreen">
          <LoginDialog redirect="/compete"/>
        </div>
      </div>
    )
  }
}