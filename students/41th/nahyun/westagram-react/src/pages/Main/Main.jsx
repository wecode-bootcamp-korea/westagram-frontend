import React from "react";
import Nav from "../../components/Nav/Nav";
import Feed from "../../components/Feed/Feed";
import MainRight from "../../components/MainRight/MainRight";
import "./Main.css";
export default function Main() {
    return (
        <div>
            <Nav />
            <main>
                <Feed
                    img={
                        "https://images.unsplash.com/photo-1565430973830-b12076b15215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    }
                    name={"kwonnahyun"}
                    otherName={"yesol"}
                    text={
                        "타오르고 가치를 곧 그들은 피는 사막이다. 바이며, 행복스럽고 가는 뿐이다. "
                    }
                />
                <MainRight />
            </main>
        </div>
    );
}
