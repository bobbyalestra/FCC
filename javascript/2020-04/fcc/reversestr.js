// one way 
function reverseString(str) {    // delacre function and the parameter is str
    let reverseStr = "";   // declare a vale to reverseStr which equals a string
    for (let i = str.length - 1; i >= 0; i--) { // if i is equal to the length of the str -1, as long as i is less or equal to zero, minus one eachtime
        reverseStr = str[i]; // declaring reverseStr = the index of str
        console.log(reverseStr);
    }
  }
  
  reverseString("gnirtSesrever");


// prints  letter out per line 

 
function reverseString1(str) //create the function with the parameter "str"
{
let reverseStr = str.split("");   // take the function name and have it equal the parameteres with a .split and ("") to open the function and be able to assign a new value to str
let reverseArray = reverseStr.reverse(); // the array reverseArray now equals the variable reverseStr add the .reverse() method

newArray = reverseArray.join(""); // created a new array to join all the split and reversed characters that were in the array

return  newArray;

// use return to return the result of the newly assigned "newArray"

}
reverseString1("")  // call the function , give it quotes on the inside to allow you to delcare a string. From now on what goes into these function parameters will be reversed



console.log(reverseString1("gnirtSesreveRtsrif"));


// reverses in a string correctly