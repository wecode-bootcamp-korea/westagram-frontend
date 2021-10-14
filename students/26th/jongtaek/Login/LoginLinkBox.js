import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class LoginLinkBox extends Component {
  render() {
    const { linkText, subtext } = this.props;
    return (
      <div className="loginLinkTextBox">
        <p className="loginLinkSubtext">{subtext}</p>
        <Link to="/" className="loginLink">
          {linkText}
        </Link>
      </div>
    );
  }
}
