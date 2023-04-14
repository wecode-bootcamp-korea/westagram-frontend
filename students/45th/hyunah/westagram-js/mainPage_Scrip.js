const reply = document.getElementById('reply_txt');
const showReply = document.getElementById('article_reply');
const replyBtn = document.getElementById('reply_button');

function addReply() {
    if (reply.value){
        const item = document.createElement('div');

        var user = 'olive'
        var heart = '<div><i class="fa-regular fa-heart"></i></div>';

        item.innerHTML = '<div><b>'+user+'</b> '+ reply.value+'</div>' + heart;
        item.id = 'article_reply_add';

        showReply.appendChild(item);
        reply.value = '';
    }
}

reply.addEventListener('keyup', function(event){
    if (event.keyCode == 13){
        addReply()
    }
})

replyBtn.addEventListener('click', function(){
    addReply()
})

