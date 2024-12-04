// Take an array of numbers and return the sum and average using for loop
let array1 = [3,5,7,9,11]
let array2 = [8,25,17,59,81]
let sum = 0;
let avg = 0;
let sum1 = 0;
let avg1 = 0;
function calcSum()
{
for (let i = 0;i<array2.length;i++){
    sum += array2[i];    
}
return sum;
}
avg=calcSum()/array2.length;   
    
console.log("sum of the array2 with for loop is:"+sum);
console.log("average of array2 with for loop is :"+avg);

// Take an array of numbers and return the sum and average using for each.
        
        array1.forEach((item)=>
        {
        sum1+=item;  
        //console.log("sum1:" +sum1);
        avg1=sum1/array1.length;        
        });     
    console.log("sum of the array1 with foreach is:"+sum1);
    console.log("average of array1 with foreach is :"+avg1);

// Take an array of strings and return the longest string.

    let strarray =["one","two","three","four","fifteen","seventeen"];
    let longstring = "";
    strarray.forEach((stringInput)=>
    {
        if (longstring.length < stringInput.length) 
            longstring = stringInput;        
    });
    console.log("longstring is :" +longstring);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

    let strarray2 =["one","two","three","four","fifteen","seventeen"];
    let num = 5;
    let result=[];
    let index=0;
    strarray2.forEach((stringInput)=>
    {
        if (stringInput.length > num) 
            {result[index] = stringInput;   
                index+=1;                     
            }
    });    
    console.log("result is :" +result);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
    let n = 10;    
    function rec(n,current)
    {
        console.log(current);
        ++current;
        if (n != current)
        {rec(n,current);}
     }
     rec(n,0);
     

    
    
