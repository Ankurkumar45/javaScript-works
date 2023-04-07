//Write a JavaScript program to sum the multiples of 3 and 5 under 1000 using function.
var num;
var count=0;

function sum()
{
    for(num=1;num<=1000;num++)
    {
        if(num%3==0 && num%5==0)
        {
            count+=num;
        }
        else
        {
            continue;
        }
    }
    console.log(count);
}

console.log(sum());