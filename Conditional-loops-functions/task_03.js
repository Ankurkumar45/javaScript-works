//Write a function of Fibonacci series using JavaScript

var n1=0;
var n2=1;
var n3;
var temp;

function Fibonacci()
{
        console.log(n1);
        console.log(n2);
        for (var i = 2; i <= 15; i++) {
        n3=n1+n2;    
        console.log(n3);   
        n1=n2;    
        n2=n3; 
        }
}

console.log(Fibonacci());