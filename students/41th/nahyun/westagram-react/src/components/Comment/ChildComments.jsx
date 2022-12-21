import { React, useState } from "react";
import "./ChildComments.scss";
export default function ChildComments({ x }) {
    const [colorKey, setColorKey] = useState();
    const click = (e) => {
        setColorKey((prev) => !prev);
        console.log(colorKey);
    };

    return (
        <div>
            <div>
                <span className="nickname-bold">afksldmf</span>
                <span className="comment">{x}</span>
                <i
                    onClick={click}
                    className={
                        "fa-solid fa-fish fa-sharp" + (colorKey ? " heart" : "")
                    }
                ></i>
                <i className="fa-solid fa-trash"></i>
            </div>
        </div>
    );
}
