/*

String in the JavaScript:-

=> String is the sequence of the character. In the JavaScript the string is enclosed in both single (' ') and double(" ") quote.
for example:-

let Name = "Anurag singh"

let lastName = 'singh';

There is another way to decleare string :-

let New = new String("Anurag singh");  => Here the concept of the constructor is used.. In this code the string constructor is
used.

console.log(New)


So in the string there are various methods that exists and some of the important methods of the string are described below:

1. .length method:-
=> This method of the string is used to find the length of the string.

for example:

let Name="Anurag Singh";

now if we want to find the length of the string that is stored in the variable Name then we have to simpley write,

Name.length; -> this will return the length of the string.


2. .charAt():-
=> This method is used to find the character at the given index and if the index that is passed in this method doesnot exist
then this method will return an empty string ['']

for example:-
let city = "Mirjapur";

Now if we want to find the character that is at the fourth index then we will use the charAt() method,

console.log(charAt(4))-> this will return  the character that is at the fourth index of the string.



3. indexOf():-
=> This method is used to find the index of the particular character of the  string and if the character that is passed in this 
method doesnot exist then it will simply return -1.

for example:
let city = "Biratnagar";
console.log(city.indexOf('g')) -> here we will get the output 7 i.e the ' g ' character lies at the index 7.
console.log(city.indexOf('v')) -> here we will get the output -1 i.e the character ' v ' doesnot exist in the string.


4.  .toUpperCase():-
-> This method is used to convert all the character of the string to the upper case i.e it will convert all the character of 
the string to the capital letter.

for example:
let Name = "Vishal";
console.log(Name.toUpperCase()) -> this will return us the output as "VISHAL". i.e each and every letter of the string is
converted to the capital letter.


5.  .toLowerCase():
=> This method is used to convert all the character of the string to the lower case i.e each and every character of the string is
converterd to the lower case.

for example:
let Name = "SHITESH";
console.log(Name.toLowerCase()) -> Here we will get the output "shitesh", each and every letter of the string is converted to 
the lower case.


6.  done up to 15:16 of the string in the javascript..
*/

let city = "Biratnagar";

console.log(city.charAt(20));