const logids = document.getElementById('logid');
const logpws = document.getElementById('logpw');

document.getElementById('logpw').addEventListener('keyup',function(){


    let btt = document.querySelector('.loginbt');


let logidv = logids.value;
let logpwv = logpws.value;
    

if((logidv.length>0) && (logpwv.length>0)){


btt.style.backgroundColor = "blue";

}else{


    btt.style.backgroundColor = "#b2dffc";
}

});