import { Component } from "react";
import "./FormLayout.scss";

export default class FormLayout extends Component {
  render() {
    return (
      <div className="FormLayout">
        <header>
          <div className="logo" />
        </header>
        {this.props.children}
      </div>
    );
  }
}
