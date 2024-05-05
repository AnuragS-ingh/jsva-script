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


6.   .substring(a,b):
 => This method is used to divide or get the small part of the string i.e it is used to get the subset of the string. In this me-
 thod we have two parameters one is a(starting index)->from where you want to start and
 second is b(ending index)-> up to where you want to end, in this the starting index is included and the ending index is excluded, meaning 
 that it will return one index less than the ending index.

 one thing is to be noted in this method that it donot take negative indexing although string support negative indexing in the 
 java script.

 for example:

 let city = "Biratnagar";
 console.log(city.substring(2,9)) => Then we will get the output as "ratnaga", here we noticed that the character 'r' is excluded
 as it is at 9th index , and i have already told you that the last or ending index is excluded.

 *********this need to be explored some more exploration********************



7.  .slice(a,b):
=> This method also work as the substring() method the only difference between them is that this "slice()" method support the
negative indexing.

for example:

let city="Biratnagar";
console.log(city.slice(-1,4))

*********this need to be explored some more exploration****************************




8. .trim():
=> This is the another method of the string, this method is used to eliminate the space from the start and from the end of the s
tring.

for example:
let city="    Biratnagar     "
console.log(city)=> The output will be "   Biratnagar    ";
console.log(city.trim())=> The out put will be "Biratnagar"



9.  .replace():
=> This method is used to replace any character or any word of the string with some of the other word. But thing to be taken 
care of is that it only replace the first occurance of that character.
for example:
let city="    Biratnagar     "
console.log(city.replace("a",'b'));=> Output will be "Birbtnagar".

10.  .include():-
=> This method is used to find whether the word or the character exist in the string or not .if the word or the character exist 
then this method return true else false.

let city="Biratnagar"
console.log(city.includes("a"));=> The output will be true
console.log(city.includes("h"));=> The output will be false...

*/

let city="Biratnagar"
console.log(city.includes("a"));