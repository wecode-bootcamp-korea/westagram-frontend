import React from "react";
import { useState } from "react";
import "./Find.scss";
import FindList from "./FindList";

const userArray = [
    {
        id: "todayis_mondy",
        nickname: "Mondy",
    },
    {
        id: "wecode_bootcamp",
        nickname: ">wecode | 위코드",
    },
    {
        id: "nahyun kwon",
        nickname: "NANA",
    },
    {
        id: "eunkeoung kwon",
        nickname: "engyeong",
    },
    {
        id: "so hard cording",
        nickname: "fuck",
    },
];

export default function Find() {
    const [input, setInput] = useState();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="nav-center">
            <input
                type="text"
                placeholder="검색"
                className="search"
                onInput={handleChange}
            />
            {input && (
                <div className="idBox">
                    <div className="id-top">
                        <p className="search">최근 검색 항목</p>
                        <p className="delete">모두 지우기</p>
                    </div>

                    <ul className="idprofile">
                        {userArray
                            .filter((x) => x.id.includes(input))
                            .map((item) => {
                                return (
                                    <FindList
                                        {...item}
                                        key={item.id}
                                        id={item.id}
                                        nickname={item.nickname}
                                    />
                                );
                            })}
                    </ul>
                </div>
            )}
        </div>
    );
}
