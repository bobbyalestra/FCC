


// loop setup {for [initial integrater; condition; auto intergrater;]}
//                 run code; then goes back to condition to auto integrater then back to code until condition is met.






// will print hello 9 times




for (let i = 0; i < 10; i++){
  console.log(i)
}



//  set up for ([initialization]; [condition]; [auto integration])

var myArray = [];

for (let i = 0; i < 5; i++){
    myArray.push(i);
  
  }
  
  console.log(myArray)

  //will display [0,1,2,3,4]. Changing the variable i so it = 1 and making i < 6, you will get a log of [1,2,3,4,5]


  // in this example by changing var i to 1 we start loop at the number 1 and making i < 11 will only make it go up to 11 and i +=2 makes it go in increments of two.
var myArray = [];

for (var i = 1; i < 11; i += 2) {
  myArray.push(i)

}

console.log(myArray)


//next example is starting at a number in decreasing it buy two.

var myArray = [];

for (var  i = 10; i > 0; i-=2){
  myArray.push(i)
}

console.log(myArray)

// this displays [10,8,6,4,2,0]. 
//by changing var i to equal 9 , it will start off at 9 and decrease by two until you hit number one
var myArray = [];

for (var  i = 9; i > 0; i-=2){
  myArray.push(i)
}

console.log(myArray)

//next we will be console logging all of var i as an array it will continue until defined

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++){
  total += myArr[i];
}
console.log(myArr[i]) 

//

let cohort11e = ["Chelsea", "Jamie", "Bobby", "Will", "Joey", "Arnell", "Zebra",  "Avacado"]
 
for (let i = 0; i < cohort11e.length; i++){
console.log(cohort11e.length) //will display how man variables are in array
 // console.log(cohort11e[2]) // will select secind name
} 



// Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem)==-1) { // add.index(elem) == -1 as the condition
      newArr.push(arr[i]);
    }
  }
    return newArr; 
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));