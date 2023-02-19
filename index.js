//question1

let myVar = 5;
console.log(myVar);

//question#2

let myString = "Hello World";
alert(myString);

//question#3

let num1 = 5;
let num2 = 10;
let userNum = parseInt(prompt("Enter a number:"));
console.log(num1 + num2 + userNum);

//question4

let myBoolean = true;
if(myBoolean = true){
    console.log("it is true.");
}
else{
    console.log("it is false.");
}

//question#5

let num = parseInt(prompt("Enter a number: "));
if((num%2) == 0){
    console.log("Even");
}
else if((num%2)!=0){
    console.log("Odd");
}
else{
    console.log("Enter valid number.")
}

//question#6

let str1 = "Hello sir!";
let str2 = "How are you?";
let str = str1 + str2;
console.log(str);

//question#7

let num3 = 8;
let num4 = 3;
console.log(num3 *num4);

//question#8

let str3 = prompt("Enter your Password: ");
if (str3 == "password")
{
  alert("Access Granted.")   
}
else
{
  alert("Access Denied.")    
}

//question#9

let num5 = parseInt(prompt("Enter 1st number: "))
let num6 = parseInt(prompt("Enter 2nd number: "))
let num7 = parseInt(prompt("Enter 3rd number: "))
if(num5>num6 && num5>num7){
    alert(num5 + " is a largest number")
}
else if(num6>num5 && num6>num7){
    alert(num6 + " is a largest number")
}
else{
    alert(num7 + " is a largest number")
}

//question#10

let str4 = prompt("Enter 1st String. ");
let str5 = prompt("Enter 2nd String. ");
if(str4 == str5){
    alert("strings are equal");
}
else{
    alert("Strings are not equal");
}