import React from 'react';
import BG from './bg';
import * as Page from '../data/config/routes.js'
import Header from './header'
import LoginDialog from './loginDialog'

export default class Login extends React.Component {
  
  render() {
    let props = [Page.Routes.home, Page.Routes.practice, 
    Page.Routes.leaderboard, Page.Routes.help]
    return (
      <div>
        <BG transparent="true"/>
        <Header links={props}/>
        <div  className="loginScreen">
          <LoginDialog />
        </div>
      </div>
    )
  }
}