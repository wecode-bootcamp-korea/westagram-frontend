import { Component } from "react";
import "./Input.scss";

export default class Input extends Component {
  render() {
    const { type, text } = this.props;
    // const { value, handleValid, handleInput } = this.props;
    // const isVaild = handleValid(value)

    return (
      <div className="Input">
        <div className="inputWrapper">
          <input
            name={type}
            type={type}
            placeholder={text}
            // onChange={handleInput}
          />
          {/* {isVaild ? <ValidCheck /> : <InvalidCheck />} */}
        </div>
      </div>
    );
  }
}

// const ValidCheck = () => <div style={{ width: '24px', height: '24px', background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAuNSIgc3Ryb2tlPSIjMEZDM0I5Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzBGQzNCOSIgZD0iTTkuMzkgMTIuODM5bDUuNjU2LTUuNjU3YTEgMSAwIDEgMSAxLjQxNCAxLjQxNGwtNi4zNjQgNi4zNjRhLjk5Ny45OTcgMCAwIDEtMS40MTQgMGwtMi44MjgtMi44MjhhMSAxIDAgMSAxIDEuNDE0LTEuNDE0bDIuMTIxIDIuMTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=") center center / cover no-repeat' }} />
// const InvalidCheck = () => <div style={{ width: '24px', height: '24px', background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAuNSIgc3Ryb2tlPSIjRjUwMDAwIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y1MDAwMCIgZD0iTTExIDE0YTEuNSAxLjUgMCAxIDEgMCAzIDEuNSAxLjUgMCAwIDEgMC0zem0wLTlhMS41IDEuNSAwIDAgMSAxLjUgMS41VjExYTEuNSAxLjUgMCAwIDEtMyAwVjYuNUExLjUgMS41IDAgMCAxIDExIDV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=") center center / cover no-repeat' }} />