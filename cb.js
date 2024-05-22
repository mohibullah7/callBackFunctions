function add(c,v){
  let addition =c +v;
  console.log(addition);
  }
  
  function findPerc(a,b){
    let percenatge = a / b * 100;
    console.log(percenatge);
  
  }


function getValues(a,b){
  let input1=document.getElementById('value1').value ;
  let input2=document.getElementById('value2').value ;
  let value11 =Number(input1);
  let value22 =Number(input2);
  a(value11,value22);
  b(value11,value22)
}

function calculate(){
 getValues(findPerc,add)
}