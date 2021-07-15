let message = document.getElementsByClassName("textMessage")[0];
let post=document.getElementsByClassName("postButton")[0];
let messVal = ""
let count = 0;
function text(e){
    messVal=message.value;
if(messVal){
    post.style.opacity=1;
    post.disabled=false;
    message.style.color="black";
}
else {
    post.style.opacity=0.5;
    post.disabled=true;
}

if(post.disabled==false&&e.code=="Enter"){
    postfuc();
}
}

function postfuc(){
    messVal= message.value;
     let posted = document.getElementsByClassName("posted")[0];
     let alldiv=document.createElement('div');
     let textdiv=document.createElement('div');
     let id=document.createElement("a");
     let img = document.createElement("img");
     alldiv.className="circle messagebox topmargin";
     id.innerHTML="mango_9324 ";
     img.className="heart";
    img.setAttribute("src","https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png")
    textdiv.appendChild(id);
    textdiv.innerHTML+=messVal;
    posted.appendChild(alldiv);
    alldiv.appendChild(textdiv);
    alldiv.appendChild(img);
    message.value="";
}

message.addEventListener("keyup", text);
post.addEventListener("click",postfuc);
