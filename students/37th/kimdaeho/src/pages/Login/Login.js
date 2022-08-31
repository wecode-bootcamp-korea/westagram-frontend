import React from "react";
import "../Login/Login.scss"

function Login(){
    return(
        <section>
            <div className="w_body">
                <header>
                    <h1>Westagram</h1>
                </header>
                <main className="login_main">
                    <input type="text" className="id_input" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    <input type="password" className="pw_input" placeholder="비밀번호"/>
                    <button id="loginBtn">로그인</button>
                </main>
                <footer>
                    <a href="#!" className="loss_pw">비밀번호를 잊으셨나요?</a>
                </footer>
            </div>    
        </section>
    )
};

export default Login;