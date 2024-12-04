// Use callback functions alongside Array methods to accomplish the following:

let temp_age=[];
let temp_index = 0;
let arrayOfObjects = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
    ]
    //****************************************  Sort the array by age.*************************************/
    arrayOfObjects.sort((a,b)=> a.age - b.age);
    console.log("sorted array");
    console.log(arrayOfObjects);

    // ***********************************************Filter the array to remove entries with an age greater than 50.*******************************/
    arrayOfObjects.forEach((obj)=>
        {
            const index = arrayOfObjects.findIndex(obj => obj.age>50)
            console.log(index);
            if (index != -1)
                { 
                    arrayOfObjects.splice(index,1)
                };
        })
    console.log("remove age greater than 50")    ;
    console.log(arrayOfObjects);

    // **************************************Map the array to change the “occupation” key to “job” and increment every age by 1.***********************/

    const map1 = arrayOfObjects.map((obj) =>{
        const newKey = {...obj,job:obj.occupation};//Create new object with new key
        delete newKey.occupation; // delete old key
        return newKey;
    });
    console.log("change the occupation to job");
    console.log(map1);

    // ****************************Use the reduce method to calculate the sum of the ages.
    const sumOfAges = arrayOfObjects.reduce((accumulator,obj)=> 
        accumulator+parseInt(obj.age),0);         
    
    console.log(" sum of the ages is :" +sumOfAges);
    
    // *******************************Then use the result to calculate the average age.
     let avgAge = sumOfAges/arrayOfObjects.length;
     console.log("Average Age is :"+ avgAge);
    
    
 
    
            
    
