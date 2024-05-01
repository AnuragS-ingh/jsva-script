/*
Conversion is the process of converting one data type in to another but in the javaScript the conversion should be done carefully
there are few rules for the conversion:

1.If we want to convert the string which contain letter or alphabets in to the number then it will give NAN (Not a Number)
Similarly if we want to conver the string that contain both number and alphabet to number then also we will get the NAN.
Same thing goes with the (undefined);
*/

// let Name=undefined;
// // let neew =Number(Name);
// // console.log(neew); //The output of this line of the code will be "NAN"
// let string1=String(Name);
// console.log(string1)


// let number=true;
// let string=String(number);// This line of code will convert the boolean value in to the string .
// console.log(string)// This will give us the value "true"
// console.log(typeof(string))// This will give us the output "string"
// console.log(string)


// let num1="1";
// let bool1=Boolean(num1);
// console.log(bool1) //The out put of this line of cod will be "true";


// let Null=null;
// let num2=Number(Null);
// console.log(num2); // This will return the output 0,because the Null is the falsy value and false is represented by the value 0
// // so in the above case when we convert the null into number it returned us the value 0;
// console.log(typeof(num2))


/*
***********OPERATION IN THE JAVA SCRIPT********************************
there are various types of the operation some of them are given below:-
*/

// console.log(2+3);
// console.log(3-2);
// console.log(3*2);
// console.log(3/3);
// console.log(4%2)// This operation will give the remainder that comes after the division of 4 by 2 and the ans will be 2;
// console.log(2**3)// This operation means the 2 to the power 3 and the value will be 8;

// console.log("Anurag "+" singh");
// console.log("1"+2+3+4);
// console.log(1+2+"5");

console.log(1+true);// this will return 2
console.log(+true)// This will return 1
