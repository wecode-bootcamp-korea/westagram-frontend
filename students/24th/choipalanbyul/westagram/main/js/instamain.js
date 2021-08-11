let $search = document.querySelector('.search input')
let $pa = document.querySelector('.pa')
let $comant = document.querySelector('.comant')
let $context = document.querySelector('.contexts')
let $love = document.querySelector('#love')
let $goods = document.querySelector('.goods')
let $textEnter = document.querySelector('.text_enter')
let $follow = document.querySelector('.follow')
let $keyword = ['ssxst31','wecode']
let keywordd = ""
function a(){
    for(let i = 0; $keyword.length >i; i++ ){
        keywordd +=$keyword[i]
    }
    return keywordd.split("")
}
let b = a()
$search.addEventListener('keydown', () =>{
    for(let i = 0; $search.value.length > i; i++){
        if ($search.value[i] === b[i]){
            $pa.style.display = "block"
        }
        else{
            $pa.style.display = "none"
        }
    }
})
$search.addEventListener('click', () => {
    $search.style.textIndent= "20px"
})

$comant.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        $context.innerHTML += '<b>ssxst31</b> ' + $comant.value + "<br />";
        $comant.value = ""
        return;
    }
    if ($comant.value.length > 0) {
        $textEnter.style.color = '#0095F6'
        return;
    }
    else if ($comant.value.length = 0){
        $textEnter.style.color = 'red'
        return;
    }
})
$textEnter.addEventListener('click', () => {
    if ($comant.value.length > 0) {
        $context.innerHTML += "<b>ssxst31</b>"+ $comant.value + "<br>";
        $comant.value = ""
    }
})

$love.addEventListener('click', () => {
    if($love.style.color === 'red'){
        $love.style.color = 'black'
        $goods.innerHTML = '지수님 외 3명이 좋아합니다'
    }
    else{
        $love.style.color = 'red'
        $goods.innerHTML = '<b>ssxst31</b>님 외 4명이 좋아합니다'
        
    }
})
$follow.addEventListener('click', () => {
    if ($follow.style.color === '#0095F6') {
    alert('아안마')
    }
})

