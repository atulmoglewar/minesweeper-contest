import React from 'react';

export default class LoginDialog extends React.Component {

  render() {
    return (
      <div className="loginDialog">
        <div className="loginMessage">Sign in to Compete.</div>
        <div>
          <a href={"/google-login?redirect=" + this.props.redirect}>
            <button className="btn btn-default">
              <img src="../../../res/img/btn_google_signin_dark_normal_web.png" />
            </button>
          </a>
        </div>
      </div>
    )
  }
}