import React, { useState } from "react";
import "./Login.css";

const App =() => {
    const checkValue = (value) => {
        if(value.length>0){
            return true;
        }
        else {
            return false;
        }
    }

    const handleBtn = (isBtnValid)=>{

        if(isBtnValid){
            loginBtn.disabled = false;
            loginBtn.style.opacity = 1;
        }
        else {
            loginBtn.disabled = true;
            loginBtn.style.opacity = 0.5;
        }
    }
}


function LoginComponent (){
    return (

    <>

        <article className="total">
        
            <nav className="westagram">
                <img alt="instagramlogo" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"/>
            </nav>

            <main className="box">
                <div className="put">
                    <input type="text" id="id" placeholder="전화번호, 사용자 이름 또는 이메일" /> 
                    <input type="password" id="pw" placeholder="비밀번호"/>
                    <button id="button" type="button">로그인</button>
                </div>
            

                <div className="or">
                    <div className= "orThree">
                        <div className="line"></div>
                        <div className="orThreeText">또는</div>
                        <div className="line"></div>
                    </div>
                </div>
            </main>

            <footer className="forget">
                비밀번호를 잊으셨나요?
            </footer>
        </article>
        <script type="text/javascript" src="./LoginJs.js"></script>

    </>

    )
}


function Maincomponent (){
    const inputs = document.getElementsByclassName=("put")[0]
    const LoginBtn = document.getElementById("button")


    const handleInput = () => {
        const idValue = document.getElementById("id").value;
        const pwValue = document.getElementById("pw").value;

        const inValidId = checkValue(idValue)
        const inValidpw = checkValue (pwValue)

        const isValidValue = inValidId && inValidpw

        handleBtn(isValidValue)
    }



    const init = () => {
        inputs.addEventListener("input",handleInput)
        inputs.addEventListener("keyup", handleInput)
    }

    init()

    }



export default App