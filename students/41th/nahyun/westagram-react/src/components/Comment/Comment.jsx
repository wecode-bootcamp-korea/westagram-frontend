import React from "react";
import { useState } from "react";
import "./Comment.scss";
import ChildComments from "./ChildComments";
export default function Comment() {
    const [input, setInput] = useState();
    const [arrayDiv, setArrayDiv] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };
    const comment = () => {
        setArrayDiv([...arrayDiv, input]);
        setInput("");
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            comment();
        }
    };

    return (
        <div>
            <div className="article-comment">
                {/* <!-- 
                                <div>
                                <span className="nickname-bold">afksldmf</span>
                                <span className="comment">hello jacascript</span> 
                                <i className='fa-solid fa-trash'></i>
                                <i className='fa-solid fa-fish fa-sharp'></i>
                                </div>
                                --> 
                                
                                */}
                {arrayDiv.map((x, key) => {
                    return <ChildComments x={x} key={key} />;
                })}
            </div>
            <div className="article-input">
                <input
                    type="text"
                    placeholder="댓글달기"
                    value={input}
                    onChange={handleInput}
                    onKeyUp={onKeyPress}
                />
                <button className="btn">게시</button>
            </div>
        </div>
    );
}
