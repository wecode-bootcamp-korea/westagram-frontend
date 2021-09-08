import { Component } from "react";
import FormLayout from "./FormLayout";
import Button from "./Button";
import Input from "./Input";
import "./Form.scss";

export default class Form extends Component {
  // state = {
  //   name: "",
  //   email: "",
  //   password: "",
  // }

  // handleInput = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value })
  // }

  render() {
    const { type, title, inputData } = this.props;

    return (
      <FormLayout>
        <div className="Form">
          <h2>{title}</h2>
          <div>
            {inputData.map((input, idx) => (
              <Input
                key={idx}
                type={input.type}
                text={input.text}
                // value={this.state[input.type]}
                // handleInput={this.handleInput}
                // handleValid={validator[input.type]}
              />
            ))}
          </div>
          <Button value={title} />
          {type === "signUp" && (
            <p className="isAlreadyLogin">
              이미 가입하셨나요? <span>로그인</span>
            </p>
          )}
        </div>
      </FormLayout>
    );
  }
}

// const validator = {
//   name: (input) => input.length >= 6,
//   email: (input) => input?.includes("@" && ".com"),
//   password: (input) => input.length >= 8,
// };

