// const price = 3500;
// if(price >= 4000){
//     //10% Discount
//     const discount = price * 10 / 100;
//     const totalPrice = price - discount;
//     console.log(totalPrice);
    
// }
// else if(price >= 2000){
//     const discount = price * 5 / 100;
//     const totalPrice = price - discount;
//     console.log(totalPrice);
    
// }
// else{
//     console.log(price);
    
// }

const age = 14;
const price = 5000
if (age <=12) {
    console.log("Free food");
    
}
else if (age <= 18) {
    const discount = price * 15 / 100;
    const payment = price - discount;
    console.log(payment);
    
    
}
else if(age >=60){
    // 50% Discount
    const discount = price * 50 / 100;
    const payment = price - discount;
    console.log(payment);
    
}
else if (age >= 50) {
    //20% Discount
    const discount = price * 20 / 100;
    const payment = price - discount;
    console.log(payment);
     
}
else{
    console.log(price);
    
}

