
let ipt2 = document.querySelectorAll("input")[1];
console.log(ipt2);

let ckbox = document.querySelector("#check");

ckbox.addEventListener("change", function(){
    let getatt = ipt2.getAttribute("type");
    if(ckbox.checked){
        ipt2.setAttribute("type","text")
    }else{
        ipt2.setAttribute("type","password")
    }
});
