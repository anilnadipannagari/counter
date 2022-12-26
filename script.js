let counterNumber = document.getElementById('counter');
let increse = document.getElementById('increment');
let decrese =  document.getElementById('decrement');
let restore = documnet.getElementById('reset');

var counter = counterNumber.innerText;

function increment(){
    counter++;
    console.log(counter);
    counterNumber.innerText=counter;

}
function decrement(){
    counter--;
    console.log(counter);
    counterNumber.innerText=counter;

}
function reset(){
    counter=0;
    console.log(counter);
    counterNumber.innerText=counter;

}
restore.onclick =reset;
decrese.onclick=decrement;
increse.onclick=increment;
