var myName = "Alisa";
var sisterName = "Elli";
myName.length;

myName.slice(0,1);

sisterName = myName.toUpperCase();
sisterName = myName.toLowerCase();

var tweet = prompt("Compose your tweet: ");

var tweetCount = tweet.length;
var tweetUnder140 = tweet.slice(0,140);

alert("You have written " + tweetCount + " charactes, you have " + (140 - tweetCount) + " characters remaining.");
alert(tweetUnder140);


var saveName = prompt("What is your name?");

var firstChar = saveName.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = saveName.slice(1,saveName.length);
var capitalisedName = upperCaseFirstChar + restOfName;

alert("Hello, " + capitalisedName);


var a = 5 + 3; //8
var b = 10 - 2; //8
var c = 3 * 3; //9
var d = 6 / 2; //3
var e = 9 % 6;  //3

var x = 5;
x++;
x--;
x+=2; // 7


var dogAge = (prompt("How old is your dog?"))
var humanAge = ((dogAge - 2) * 4 ) + 21;
alert("Your dog is " + humanAge + " years old in human years.");

// Milk Store

function getMilk(money, costPerBottle) {
    alert("Go Milk Store");
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    alert("Go Home");
    return money %  costPerBottle;
}

function calcBottles(startingMoney, costPerBottle) {
    return numberOfBottles = Math.floor(startingMoney/costPerBottle);
}

var money = 4;
var change = getMilk(money, 1.5);


// Calculate

function lifeInWeeks(age) {

    var days = (90 * 365) - (age * 365);
    var weeks = (90 * 52) - (age * 52);
    var months = (90 * 12) - (age * 12);
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

// BMI

function bmiCalculator(weight, height) {
    return Math.round(weight / Math.pow(height,2));
}

// Random

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

// Love Calculator

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if(loveScore > 100) {
    console.log("Your love score in " + loveScore + "%" + " You are perfect");
} else if(loveScore > 30 && loveScore < 70) {
    console.log("Your love score in " + loveScore + "%" + " You are almost perfect");
} else{
    console.log("Your love score in " + loveScore + "%" + " Np change");
}

// ===
// !==
// <
// >
// <=
// >=

function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height,2);
    var interpretation = "";
    
    if(bmi < 18.5) {
        interpretation =  "Your BMI is " + bmi + ", so you are underweight.";
    } else if(bmi < 24.9) {
        interpretation =  "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
}

function isLeap(year) {
    if(year % 4 === 0) {
        if(year % 100 === 0){ 
            if(year % 100 === 0)
            {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }

        } else{
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}
// Guest list
var guestList = ["Allis", "Arthur", "Lydin"];
var guestName = "Allis";
if(guestList.includes(guestName)){
    alert("Welcome!")
} else{
    alert("Sorry, next time.")
}

var output = [];
var count = 1;

function fizzBuzz() 
{
    if (count % 3 ===0 && count % 5 === 0){
        output.push("Fizz");
    } else if(count % 3 === 0){
        output.push("Fizz");
    } else if(count % 5 === 0){
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;

    console.log(output);
}

function whosPaying(names) {
    
    var ran = names[Math.floor(Math.random()*names.length)];

    return ran +  " is going to buy lunch today!"

}