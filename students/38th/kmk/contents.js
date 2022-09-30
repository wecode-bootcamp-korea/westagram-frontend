const ri = document.getElementById('reply');
const rb = document.getElementsByClassName('rb')[0];
const r_c = document.getElementsByClassName('r_c')[0];


ri.addEventListener('keyup',
 () => {

         if (ri.value.trim().length> 0 ) {
             return rb.style.color = "blue";
         } else if(ri.value.trim().length === 0){
            return rb.style.color = "#9C9C9C";
         }
         
     }
 );


rb.addEventListener('click',
  
    () => {
        if (rb.style.color == "blue") {
            
             r_c.innerHTML += 
             `<div class= "r__c">
                <div class="yn">ys_dd002 &nbsp;</div>
                <div class="rr">${ri.value}</div>
                <div class = "ri"><i class="fa-regular fa-heart"></i></div>
                <div class='rd'>삭제</div>
             </div>`;
            ri.value ="";

const rh =document.getElementsByClassName('rh')[0];
const rr = document.getElementsByClassName('rr')[0];
        }
    }
);

ri.addEventListener('keyup',
(e) => {

   if (e.keyCode === 13 &&rb.style.color == "blue"){
    r_c.innerHTML += `<div class= "r__c"><div class="yn">ys_dd002 &nbsp;</div>
    <div class="rr">` + ri.value + `</div><div class = "rh"><i class="fa-regular fa-heart"></i></div><div class='rd'>삭제</div> </div>`;
    ri.value ="";
    }
    const rh =document.getElementsByClassName('rh')[0];

        
    }
);



const rh =document.getElementsByClassName('rh')[0];
const rr = document.getElementsByClassName('rr')[0];
console.log(rh);

rh.addEventListener('click',
    ()=>{
        rr.innerHTML+= "dd";
    }
)

// const rd=document.getElementsByClassName('rd')[0];
//  rd_click(()=>{
//     alert("정말 삭제하시겠습니까?");
//  });



// rd.addEventListener('click',
// ()=>{

// if (confirm("정말 삭제하시겠습니까??") == true){    
// console.log(1)
//     rr.innerHTML="";

// }else{   //취소

//     return false;

// }
// }
// )