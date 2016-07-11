"use strict";

document.writeln( "Hello, world!" );

//var NaN = "hi";

//isNaN( NaN );
document.writeln( "print on the page" );

console.log( "print in the console" );

alert( "show an alert" );
prompt( "prompt for input" );

var emptyObject = {};
var stooge = {
    "first-name": "Jerome",
    lastName: "Howard"
}

var a = 42;

a = a + 2;

b = String(a);

console.log(a);
console.log(b);

// Comments should say why or how rather than what.

// Returns undefined
void 42;

var TAX_RATE = 0.09;
var SPENDING_THRESHOLD = 200;
var ACCESSORY_PRICE = 9.99;
var PHONE_PRICE = 99.99;

var balance = prompt( "Enter your balance: " );
var amount = 0;

while ( balance >= amount ) {
    amount += purchasePhone( amount );
}

function purchasePhone( amount ) {
    amount += PHONE_PRICE;
    if ( amount < SPENDING_THRESHOLD ) {
        amount += ACCESSORY_PRICE;
    }
    return amount;
}

function calculateTax( amount ) {
    return amount * TAX_RATE;
}

amount += calculateTax( amount );

console.log( "Your purchase: $" + amount.toFixed( 2 ) );

if ( balance - amount >= 0 ) {
    console.log( "Yes you can purchase!" );
} else {
    console.log( "No you cannot purchase!" );
}
