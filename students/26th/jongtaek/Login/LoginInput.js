import React, { Component } from 'react';
import LoginLinkBox from './LoginLinkBox';

export default class LoginInput extends Component {
  state = {
    handleOnBlur: false,
    handleOnFocus: false,
  };

  handleBlur = e => {
    this.setState({
      handleOnBlur: true,
    });
  };
  handleFocus = e => {
    this.setState({
      handleOnFocus: true,
    });
  };
  render() {
    const { handleOnBlur, handleOnFocus } = this.state;

    const {
      isPasswordSectetOnOff,
      name,
      handleChange,
      warnText,
      placeholder,
      type,
      linkText,
      subtext,
      value,
      inputValue,
    } = this.props;
    return (
      <>
        <input
          inputValue={inputValue}
          name={name}
          className={
            handleOnFocus && inputValue.length > 0
              ? 'loginInputTrue'
              : 'loginInput'
          }
          placeholder={placeholder}
          type={isPasswordSectetOnOff ? null : type}
          value={value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={handleChange}
        />

        {inputValue.length === 0 && handleOnBlur ? (
          <div className="loginWarnTextTrue">{warnText}</div>
        ) : (
          <div className="loginWarnText">{warnText}</div>
        )}

        <LoginLinkBox linkText={linkText} subtext={subtext} />
      </>
    );
  }
}
