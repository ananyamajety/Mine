const desig=document.getElementById("typing-text");
const text=desig.textContent
desig.textContent="";
let i=0;
function typeEffect(){
    if(i<text.length){
        desig.textContent+=text.charAt(i);
        i++;
        setTimeout(typeEffect,100);
    }
}
window.onload=typeEffect;