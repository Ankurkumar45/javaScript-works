//Write a JavaScript function to get the difference between a given number and 13, 
//if the number is greater than 13 return double the absolute difference.

var num=parseInt(prompt("Enter any number: "));
var a;
var b;

function difference()
{
    if(num>13){
        a=num-13;
        b=a*2;
        console.log(b);
    }
    else{
        b=num-13;
        console.log(b);
    }
}

console.log(difference());