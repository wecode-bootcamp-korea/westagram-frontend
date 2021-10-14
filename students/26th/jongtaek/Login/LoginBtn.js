import React, { Component } from 'react';

export default class LoginBtn extends Component {
  render() {
    const { placeholder, className, goToPage } = this.props;
    return (
      <div>
        <button className={className} onClick={goToPage}>
          {placeholder}
        </button>
      </div>
    );
  }
}
