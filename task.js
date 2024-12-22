// Task-1
// let burger = 200;
// if (burger>500) {
//     console.log("Free cock");
    
// }
// else{
//     burger+=30;
//     console.log(burger);
    
// }
// burger>500? console.log("free Coke"): console.log(burger+30);

// Task-2
// let weight = 65;
// let height = 1.6;
// const bmi = weight / (height**2);
// if (bmi<18.5) {
//     console.log("you are underweight");
    
// }
// else if (bmi >= 18.5 && bmi <= 24.9){
//     console.log("you are normal");
    
// }
// else if (bmi >= 25 && bmi <= 29.9){
//     console.log("you are overweight");
    
// }
// else{
//     console.log("you are obese");
    
// }

// Task-3
// let mark =59;
// if (mark<=100 && mark>=90) {
//     console.log("A");
// }
// else if (mark<=89 && mark>=80) {
//     console.log("B");
    
// }
// else if (mark<=79 && mark>=70) {
//     console.log("c");
    
// }
// else if (mark<=69 && mark>=60) {
//     console.log("D");
    
// }
// else{
//     console.log("F");
    
// }

// Task-4
// let myScore=79;
// let fScore=55;
// if (myScore>80) {
//     if (fScore>80) {
//         console.log("go for a lunch");
        
//     }
//     else if (fScore<80 && fScore>=60) {
//         console.log("good luck next time.");
        
//     }
//     else if (fScore<60 && fScore>=40) {
//         console.log(" keep your friend's message unseen");
        
//     }
//     else if (fScore<40) {
//         console.log("block your friend");
        
//     }
// }
// else{
//     console.log("go to home and sleep and act sad");
    
// }

// Task-5
// let num1 = 3;
// let num2 = 4;
// if (num1>num2) {
//     result=num1*2
//     console.log(result);
    
// }
// else{
//     result=num1+num2
//     console.log(result);
    
// }

// Task-6
let age = 24;
let isStudent = true;
let ticketPrice = 800;
if (age<=10) {
    console.log("Free");
    
}
else if (isStudent===true && age>=14 && age<=28) {
    discount=ticketPrice*50 / 100;
    totalPrice = ticketPrice - discount;
    console.log(totalPrice);
    
}
else if (age>=60) {
    discount=ticketPrice*15 / 100;
    totalPrice = ticketPrice - discount;
    console.log(totalPrice);
    
}   
else{
    console.log(ticketPrice);
    
}