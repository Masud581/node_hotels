var a =6;
var b = 9;
var ans =a*b;
const name = 'Ebne Masud';
console.log(ans);
console.log(typeof name);
console.log(typeof ans);
const car =["Ebne", "Volvo","BMW"];
car.push("tesla");
console.log(car);
console.log(car[2]);

var hour =19;
if(hour < 12){
    console.log("We are not allowed")
}
else{
    console.log("We are allowed")
}


//For Loop
var count =10;
for(var i = 1; i<=count;i++){
    console.log(i)
}
//object in JavaScript
const person={
    name: "Ebne Masud",
    age: 34,
    isStudent: false,
    hobbies: ["Reading","Playing","Controversy"]
}
console.log(person.hobbies)

// Filter in JavaScript
const ages = [23, 33,16,49]
const result = ages.filter(checkAge)
function checkAge(age){
    return age>=37
}
console.log(result);



var prompt = require('prompt-sync')();
const age = prompt("Please Enter your age: ");
if (age < 18){
    console.log("We have to prepare about your future");
}
else{
    console.log("You have to hard work everytime");
}