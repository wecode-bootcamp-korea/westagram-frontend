import { Component } from "react";
import "./Button.scss";

export default class Button extends Component {
  render() {
    return <div className="Button">{this.props.value}</div>;
  }
}
