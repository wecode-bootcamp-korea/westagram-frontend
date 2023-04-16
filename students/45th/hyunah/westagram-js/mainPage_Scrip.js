const reply = document.getElementsByClassName('reply_txt')[0];
const showReply = document.getElementsByClassName('article_reply')[0];
const replyBtn = document.getElementsByClassName('reply_button')[0];

function addReply() {
    if (reply.value){
        const item = document.createElement('div');

        // 1. content
        const content = document.createElement('div')

        
        //// 1-1. user name
        var name = 'olive'
        const user_part = document.createElement('b')
        user_part.innerText = name + ' '

        content.appendChild(user_part)

        //// 1-2. reply content
        var reply_content = document.createTextNode(reply.value)
        const reply_part = document.createElement('span')
        reply_part.appendChild(reply_content)

        content.appendChild(reply_part)

        item.appendChild(content)


        // 2. heart
        var heart_mode = '<i class="fa-regular fa-heart"></i>'
        const heart = document.createElement('div')
        heart.innerHTML = heart_mode

        item.appendChild(heart)

        // show reply (attach 'item')
        item.className = 'article_reply_add'; //for display:flex; justify-content:space-between;

        showReply.appendChild(item);
        reply.value = '';
    }
}

reply.addEventListener('keyup', function(event){
    if (event.keyCode == 13){ //'enter' key
        addReply()
    }
})

replyBtn.addEventListener('click', function(){
    addReply()
})

