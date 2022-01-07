const firbtn = document.querySelector('#id');
const secbtn = document.querySelector('#psw');
const thrbtn = document.querySelector('button');
// thrbtn.disabled = true;
// html에 이미 속성값이(활성화값) 적혀있기 때문에 굳이 쓸 필요x

// special태그에 백그라운드 컬러만 써서 하는 이유는 
// 이미 적용할 버튼에 모든 속성값이 배경에 있기 때문에 백그라운드 컬러만 바꿔주면 편하기 때문
// 값을 다 넣어버리면 나중에 수정 의뢰가 들어왔을떄 일일히 바꿔야함.

// keyup stateHandler
//
//
//
//
//에러가 날 때 한줄한줄 콘솔 찍어보면서 개발자도구에서 확인해보면 좋음.

function stateHandler() {
    if(firbtn.value.length>0 && secbtn.value.length>0 ){
        //  그냥 firbtn에 .length를 주게 되면 저건 input 자체에 주게 되는 건데 값이 없기 때문에 length를 알 수 x   
        //  그래서 벨류값에 .length를 주는 것.
        thrbtn.disabled = false;
        //keyup을 이벤트로 정해 놨기 때문에 만약에 값을 입력하고 지웠을 때 else로 나타낸 값에 멈춰있게 됌.
        //그래서 위에서는 적지 않았지만 여기에는 추가를 했다.
        // 둘 다 값이 없을 때는 버튼 활성화를 없애야하기 때문에  false값을 줌.
        thrbtn.style.backgroundColor = '#2693ff';
        // 또는 thrbtn.classList.add('special');
        // 둘 다 써도 됌. 하지만 둘다 클래스 추가로 쓰는 건 안됨. 이유는 다음 함수에도 나옴.
        // .style.backgroundColor로 하게 되면 html 태그안에 직접적으로 속성값을 넣는 거라(=인라인스타일)
        // 제일 먼저 적용이 됨. 근데 else에서는 .classList.add를 교차로 쓰게 되면 .special이 클래스 값이라
        // 나름 상위값이긴 하지만 인라인스타일이 제일 최상위요소라 개발자도구에서 보면 아예 씹히게 됌.

    }
    else{
        thrbtn.disabled = true;
        thrbtn.style.backgroundColor= '#c0dffd' ;
        // 또는 thrbtn.classList.add('special2');
       
        thrbtn.style.removeProperty('backgroundColor');
    //     //이거 removepProperty가 함수가 아니라고 개발자 도구에 오류 떴는데 왜 그런지 좀 알아야 할 것 같음.
    //     // 그리고 구글에 쳐봤더니 backgroundColor background-color개 있던데 차이도 알아야할 것 같음.
    //     //css에서는 있었던 -가 js에서는 없애고 대문자가 첫글자로 같이 해서 합쳐짐
    //     //그래서 여기는 js니까 대문자로 바꿔서 쓰는게 맞지 않나 싶은데 왜 함수가 아니라고 하는걸까
    //     //이거 style안붙여줘서 어디 프로퍼티인지 못찾아서 오류가 낫던 듯 하다
    }
}

function stateHandler() {
    if(firbtn.value === "" || secbtn.value === "" ){
        // 여기서는 값만 놓고 봤을때 ""은 falsy값이라 두 개를 또는 으로 해서
        //둘 다 값이 입력되지 않거나, 하나만 값이 입력됐을 때 값이 활성화 되야하기 때문에 true.
        thrbtn.disabled = true;
        // thrbtn.classList.add('special2');
        //실행이 안되는 이유는 button태그에 special과 special2 2개의 태그가 같이 붙게 되는데
        //그렇게 되면 앞에있는 클래스가 먼저 적용이 되기 때문에 뒤에 있던 special이 씹힘.
        //그리고 값을 하나 입력했을 때도 왜 적용이 안되냐면 값을 하나 입력하는 값도 else에 속하기 때문에
        //두 개의 클래스가 적용이 됐는데 제일 앞에 있던 special 속성만 적용이 되어서 파란색으로
        //바뀌지 않는 거임.
        thrbtn.classList.remove('special');
        //이건 else일 경우 그 속성 지우기

    }
    else{
        thrbtn.disabled = false;
        thrbtn.classList.add('special');
        
    }
}


firbtn.addEventListener("keyup", stateHandler);
secbtn.addEventListener("keyup", stateHandler);