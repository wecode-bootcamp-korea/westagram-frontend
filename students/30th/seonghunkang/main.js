const comment_btn = document.querySelector(".comment_input");
const post_btn = document.querySelector("#post_button");
const delete_btn = document.querySelector("#delete");
console.log(delete_btn);
// const delete_btn = document.querySelector(".delete");


function register_comment() {
    let comment = $("#comment_input").val();
    console.log(comment);
    let temp_html = `<ul id="new_comment">
                        <li class = "a_comment">
                            <span>wecode_bootcamp</span>
                            <span>${comment}</span>
                        </li>
                        <li>
                            <span id="delete">x</span>
                        </li>  
                    </ul>
    `;
    $("#comment_box").append(temp_html);
}

function delete_comment() {

}

post_btn.addEventListener("click", register_comment);
delete_btn.addEventListener("click",delete_comment);


// userId.innerText, userID.className

// registercomment(value)
// checkInput() --> input.length === 0
// document.createElement("span")
// deletebtn.classList.add("delete");
//deletebtn.innerText = 'x';
//deletebtn.classList.add("delete");


//newCommend.appendChild(userId)
//newCommend.appendChild(commentecontent)
//newCommend.appendChild(newCommentList)

//input.value = "";


//dev tool 사용할것!


//makeDeleteEvent(newCOmmentlist){}
//

// 입력란에 남아있는것도 없애야함 ~
//input 의 value를 비워주면 됨 
//input.value = ""
