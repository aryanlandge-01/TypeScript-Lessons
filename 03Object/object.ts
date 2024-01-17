const user = {
    name: "aryan",
    email: "aryan@45.com",
    isactive: true
}




// Accept the object as parameter in the function 

function createUser({name: string,isPaid: boolean}){

}


createUser({name:"Taniya",isPaid: true});

// Bad behavouir of object in Ts 

let user1 = {name: "prem",isPaid: false,price: 499};

createUser(user1);


// Return object explicitly
function createCourse():{name: string,price: number} {
    return {name: "react.js",price: 399}
}



// Type Aliasing.

type Point = {
    x: number;
    y: number;
};
  
// Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
  
  printCoord({ x: 100, y: 100 });


type Area = {
    l: number;
    b: number;
};

function PrintArea(A: Area){
    console.log("The area of the surface is the "+ A.l);
}

PrintArea({l: 4,b: 4});


// Readonly properties by typescript

type Student = {
    readonly _id: number;
    name: string;
    rollName: number;
}


const S1: Student = {
    _id: 898993,
    name: "pratik",
    rollName: 220
}


// how defined type of the some properties later 

type Product = {
    mfgdate: number;
}

type ProductDetails = Product & {expdate: number};




export{}