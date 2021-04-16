// https://codeinterview.io/VKTQPGKYFS
// david@outco.io

/*
 * majorityElementTopTwo
 * 
 * Write a function which accepts an array of integers and returns in a new two item array
 * the two integers in the input that appear most frequently.
 * 
 * majorityElementTopTwo([3,3,1,2,1,1,4,4,4,4]); ==> [4,1]
 */



function majorityElementTopTwo (arr) {
    var numberCounter = {}
   
   for (let i = 0; i < arr.length; i++){
     
     numberCounter[arr[i]] = (!numberCounter[arr[i]]? 1 : numberCounter[arr[i]]+1)
     
   }
   console.log(numberCounter)
   
  
   
   var entriesArr = Object.entries(numberCounter)
   
   var biggestProperty = ["0", 0]
   var secondBiggestProperty = ["0", 0]
   
   for (let i = 0; i < entriesArr.length; i++ ){
     console.log("Previous Order", entriesArr[i])
     
     if (entriesArr[i][1] > biggestProperty[1]){
       secondBiggestProperty = biggestProperty
       biggestProperty = entriesArr[i]
     } else if (entriesArr[i][1] > secondBiggestProperty[1]){
       secondBiggestProperty = entriesArr[i]
     }
     
     console.log("Current Biggest: ",biggestProperty,"Current Second: ", secondBiggestProperty)
     
   }
    var topTwoMajority = [Number(biggestProperty[0]), Number(secondBiggestProperty[0])]
    console.log( "Top Two Majority: ", topTwoMajority)
    return topTwoMajority
   
 }
 
 // majorityElementTopTwo([3,3,1,2,1,1,4,4,4,4]);
 
 
 /*
  * sortedBitSearch
  * 
  * Write a function which accepts an array of 0s and 1s sorted in ascending order and returns 
  * the number of 1s in the array.
  * 
  * sortedBitSearch([0,1,1,1,1,1,1,1]); => 7
  *                      m   m
  * 
  */
 
 function sortedBitSearch (arr) {
   
   var firstOne;
   
   function findingFirstOneRecursion (subArray){
     
     const mainRootIndex = (subArray.length /2)
     
     console.log("Main Root Index", mainRootIndex) 
     
     while (!firstOne){
       (subArray[mainRootIndex] === 1  ?
         
         arr[mainRootIndex - 1] === 0 ? 
           firstOne = arr[mainRootIndex] : findingFirstOneRecursion(subArray.slice(0, mainRootIndex))
         
       :subArray[mainRootIndex] === 0?
                 
         arr[mainRootIndex + 1] === 1 ? 
           firstOne = arr[mainRootIndex + 1] : findingFirstOneRecursion(subArray.slice(mainRootIndex))
   
       : firstOne = `Error - Current Root: ${mainRootIndex}, Current Array: ${subArray}`
       )
     }
     
   }
   
   findingFirstOneRecursion(arr)
   console.log("First One: ",firstOne)
   console.log("Count of Ones: ", arr.length - firstOne)
   return arr.length - firstOne
 }
 
 sortedBitSearch([0,1,1,1,1,1,1,1]);
 
 // console.log("Question1: Are if-statements or ternary statements better for showing this type of functionality?")
 // Depending on what it is, I usually start with an if statement 
 // and if all steps of the ifstatement require only one line, I turn it into a ternary statement
 
 
 // console.log("Question2: What would be the most appropriate way of indending a chain of ternary statements? ")
    
 
 