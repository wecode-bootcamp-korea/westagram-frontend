import { Component } from "react";
import Form from "./Components/Form";
import "./Modal.scss";

export default class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <Form type="signUp" title="회원가입" inputData={SIGNUP_DATA} />
        {/* <Form type="signIn" title="로그인" inputData={SIGNIN_DATA} /> */}
      </div>
    );
  }
}

const SIGNUP_DATA = [
  {
    type: "name",
    text: "이름",
  },
  {
    type: "email",
    text: "이메일",
  },
  {
    type: "password",
    text: "비밀번호",
  },
];

const SIGNIN_DATA = [
  {
    type: "email",
    text: "이메일",
  },
  {
    type: "password",
    text: "비밀번호",
  },
];
