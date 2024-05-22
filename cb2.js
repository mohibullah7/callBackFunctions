function add(a,b){
let addvalues = a + b;
console.log(addvalues);
}

function perc (c,d){
let percenatge = c / d * 100;
console.log(percenatge);
}

function getValues(fir,sec){
let obtain =document.getElementById('obtmar').value ;
let obtainVal = Number(obtain);
let total =document.getElementById('totalMar').value ;
let totalVal = Number(total);
fir(obtainVal,totalVal);
sec(obtainVal,totalVal);
}

function calc(){
  getValues(add,perc);
}