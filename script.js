const min = 1;
const max= 100;

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}  
const rnumber=getRandom(min, max); 
const show = document.querySelector(".show");
const input = document.querySelector("input");
let popytka=9;
let swich=1;

function butr(){
if(swich===1){
  if(popytka===0){
    show.innerHTML="Sory, you are out of attempts! The correct number was "+rnumber;   
  }  else if(input.value<rnumber){
    show.innerHTML="Too low! Try again "+popytka +" attempts remaining";
    popytka--;
  } else if(input.value>rnumber){
    show.innerHTML="Too high! Try again "+popytka +" attempts remaining";
    popytka--;  
  } else{
    show.innerHTML="Congratulations!";
    swich=0;
  }
}  
  console.log(rnumber);
}