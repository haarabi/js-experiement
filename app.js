var a = "Hello World!";

function b() {

};

function f() {
    try {
        console.log( 0 );
        throw "bogus";
    } catch (e) {
        console.log( 1 );
        
        return true; // this return is suspended until the finally block has completed

        console.log( 2 ); // unreacheable code

    } finally {
        console.log ( 3 );
        return false; // overwrites the return statement in the catch block
        console.log ( 4 ); // unreacheable code
    }

    console.log ( 5 ); // unreacheable code
}

f();

function doSomethingErrorProne() {
    if( true ) {
        throw( new Error( 'My custom error message' ) );        
    } else {
        console.log( "no errors found" )
    }
}

try {
    doSomethingErrorProne();
} catch( e ) {
    console.log( e.name );
    console.log( e.message );
}

var arr = [];

i = 1000000000
while (i--) {
    arr.push(i);
}

var start = new Date().getMilliseconds();

// faster
var j = arr.length;
for ( var i = 0;  i < j; i++) {
    //your code
}

var end = new Date().getMilliseconds();

console.log("first: " + (end-start));

start = new Date().getMilliseconds();

// yet faster
j = arr.length;
while (j--) {

}

end = new Date().getMilliseconds();

console.log("first: " + (end-start));
