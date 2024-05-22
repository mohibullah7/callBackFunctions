function zero(a){
  let zerobtn = document.getElementById('zero').value ;
  let zeroVal = zerobtn;
  zeroVal =a;
}

function one(b){
  let onebtn = document.getElementById('one').value ;
  let oneVal = onebtn;
  oneVal =b;

}

function two(c){
  let twobtn = document.getElementById('two').value ;
let twoVal=twobtn;
twoVal =c;
}

function three(d){
  let threebtn = document.getElementById('three').value ;
let threeVal =threebtn;
threeVal =d;
}

function four(e){
  let fourbtn = document.getElementById('four').value ;
let fourVal = fourbtn;
fourVal =e;
}

function five(f){
  let fivebtn = document.getElementById('five').value ;
let fiveVal = fivebtn;
fiveVal =f;
}

function six(g){
  let sixbtn = document.getElementById('six').value ;
let sixVal = sixbtn;
sixVal= g;
}

function seven(h){
  let sevenbtn = document.getElementById('seven').value ;
let sevenVal = sevenbtn;
sevenVal =h;
}

function eight(i){
  let eightbtn = document.getElementById('eight').value ;
let eightVal = eightbtn;
eightVal =i;
}

function nine(j){
  let ninebtn = document.getElementById('nine').value ;
let nineVal = ninebtn;
nineVal = j;
}

function getValues(a,b,c,d,e,f,g,h,i,j){

  let valuezero = document.getElementById('zero').avlue;
  let zeroVal =Number(valuezero) ;
  let valueone =document.getElementById('one').value;
  let oneVal =Number(valueone) ;
  let valuetwo =document.getElementById('two').value;
  let twoVal =Number(valuetwo) ;
  let valuethree =document.getElementById('three').value;
  let threeVal =Number(valuethree) ;
  let valuefour =document.getElementById('four').value;
  let fourVal = Number(valuefour);
  let valuefive =document.getElementById('five').value;
  let fiveVal =Number(valuefive) ;
 let valuesix =document.getElementById('six').value;
let sixVal =Number(valuesix) ;

 let valueseven =document.getElementById('seven').value;
let sevenVal = valueseven;

 let valueeight =document.getElementById('eight').value;
let eightVal = valueeight;

 let valuenine =document.getElementById('nine').value;
let nineVal = valuenine;

 zero(valuezero);
 one(valueone);
 two(valuetwo);
 three(valuethree);
 four(valuefour);
 five(valuefive);
 six(valuesix);
 seven(valueseven);
 eight(valueeight);
 nine(valuenine);
a(zero)
b(one)
c(two)
d(three)
e(four)
f(five)
g(six)
h(nine)
i(eight)
j(nine)
let savedValues =Number(zero,one,two,three,four,five,six,seven,eight,nine);
console.log(savedValues);
}
function add(c,v){
  let addition =c +v;
  console.log(addition);
  }
  
  function findPerc(a,b){
    let percenatge = a / b * 100;
    console.log(percenatge);
  
  }