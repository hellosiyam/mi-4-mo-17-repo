const price = 3500;
if(price >= 4000){
    //10% Discount
    const discount = price * 10 / 100;
    const totalPrice = price - discount;
    console.log(totalPrice);
    
}
else if(price >= 2000){
    const discount = price * 5 / 100;
    const totalPrice = price - discount;
    console.log(totalPrice);
    
}
else{
    console.log(price);
    
}