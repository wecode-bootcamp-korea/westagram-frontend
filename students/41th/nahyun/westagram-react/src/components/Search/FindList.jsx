import React from "react";

export default function FindList({ id, nickname }) {
    return (
        <div>
            <li key={id}>
                <span className="idcircle"></span>
                <div className="idNames">
                    <span className="idName">{id}</span>
                    <span className="idNickName">{nickname}</span>
                </div>
            </li>
        </div>
    );
}
