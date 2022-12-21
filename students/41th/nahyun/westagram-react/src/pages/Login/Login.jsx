import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
export default function Login() {
    // const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    // const [btn, setBtn] = useState();
    const handleId = (e) => {
        setId(e.target.value);
    };
    const handlePw = (e) => {
        setPw(e.target.value);
    };

    return (
        <div className="LoginContainer">
            <h1>Instagram</h1>
            <input
                className="id"
                type="text"
                value={id}
                placeholder="전화번호, 사용자 이름"
                onChange={handleId}
            />
            <input
                className="password"
                value={pw}
                type="password"
                placeholder="비밀번호"
                onChange={handlePw}
            />
            <button
                className="loginBtn"
                style={
                    id.includes("@") && pw.length >= 8
                        ? { backgroundColor: "blue" }
                        : { backgroundColor: "#c5e1fa" }
                }
            >
                <Link to="/" className="linkToMain">
                    로그인
                </Link>
            </button>
            <Link to="/Signup" className="linkToSignup">
                회원가입
            </Link>
        </div>
    );
}
