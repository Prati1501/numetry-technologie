let btnopen=document.querySelector(".btnopen");
let box=document.querySelector(".box");
let body=document.querySelector("body");
let close=document.querySelector(".close");

btnopen.addEventListener("click",()=>
{
    btnopen.style.display="none";
    box.style.display="block";
});