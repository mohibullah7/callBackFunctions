function calculatePercent(obtain , total){
  let percent=obtain/total*100;
  alert(Math.floor(percent))
  
}
function add(a,b){
let sum =a+b;
console.log(sum);
}

function getValue(func, second){
  let obtain=document.getElementById("obtain").value;
 let total = document.getElementById("total").value;
 let obtainMarks= Number(obtain);
 let totalMarks= Number(total);
 func(obtainMarks,totalMarks);
 second(obtainMarks,totalMarks)
//    console.log("call");
 

}

function clickMe(){
  getValue(calculatePercent,add);
  console.log("click call");
}