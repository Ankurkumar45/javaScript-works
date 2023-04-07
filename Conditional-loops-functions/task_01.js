//Write a function that filters out negative numbers.

var array=[1,2,4,23,-3,-2,34,-53,10];

function filterNigativeNumbers()
{
    for(var i=0;i<array.length;i++)
    {
        if(array[i]<0)
        {
            console.log(array[i]);
        }
        else
        {
            continue;
        }
    }
}
console.log(filterNigativeNumbers());