
    let ripplebutton = document.getElementById('button');

    ripplebutton.addEventListener('mouseup', function(){ 

    add_div();
    // add_span();
        // id 값 가져오기
    // const what = document.getElementById('myId').textContent;
    // document.getElementById('testinputid').textContent = what;
         // input 내용 가져오기
    // const gettext = document.getElementById('typingtext').value;
    // document.getElementById('testinput').innerHTML = gettext;    
    })
    
    function add_div(){

        const what = document.getElementById('myId').textContent;
        const gettext = document.getElementById('typingtext').value;  

        var div = document.createElement('div');
        var span = document.createElement('span');

    // document.getElementById('testinputid').textContent = what;
    // document.getElementById('testinput').innerHTML = gettext; 

        div.innerHTML = what; // div 추가
        span.innerHTML = gettext;
        document.getElementById('newcomment').appendChild(div);
        div.id ='winid';
        span.id='winspan';
        div.append(span);
    // document.getElementById('winid').appendChild(span);
    // document.getElemnetById('newcomment').appendChild(span2); // 그리고 newcomment란 id 를 가지는 곳에 추가
    }
    
    ripplebutton.addEventListener('click', function(){
 
        document.getElementById('typingtext').value = "";
    })

    // function add_span(){
    //     // const what = document.getElementById('myId').textContent;
    //     const gettext = document.getElementById('typingtext').value;
            
    //     var span = document.createElement('span');

    //     // document.getElementById('testinputid').textContent = what;
    //     // document.getElementById('testinput').innerHTML = gettext; 
    //     // span.innerHTML = what;
    //     span.innerHTML = gettext; // div 추가 

    //     document.getElementById('winid').append(span);

    // }
    
    


    /* onchange = 'printName()' 사용시 키보드 엔터 쳤을때 댓글 나옴 */
    // function printName(){
    //     const name = document.getElementById('typingtext').value;
    //     document.getElementById('testinput').innerText = name;
    //     let what = document.getElementById('myId').textContent;

    //     document.getElementById('testinputid').textContent = what;
    // }    

//     ripplebutton.addEventListener('click', function(){
//     document.getElementById('testinput').textContent = 'testinput 테스트용입니다';  

// })

/*
 1. 인스타그램 id 적혀있는 아무 id 태그에서 textcontent 로 가져옴
 2. 가져온 textcontent 를 변수에 집어넣은 후, 빈 댓글란 아이디 textcontent 에 넣음
 3. 우선 이러면 아이디는 보이는걸 확인함..
 4. 근데 왜 댓글달기는 안보일까?
 5. input 에 들어있는 텍스트 값을 textcontent로 가져옴
 6. 가져온 textcontent를 변수에 넣은 후, 빈 댓글란 댓글 textcontent에 넣음
 7. 이러는데 왜 댓글이 안보일까??????
 */