

function addTwo(num: number): number{
    return num + 2;
}


function getUpper(val: string){
    return val.toUpperCase()
}


function signUpUser(name: string,email: string,password: string ,ispaid: boolean){}

let loginMe = (name: string,email: string,ispaid: boolean = false) => {}

addTwo(8);
getUpper("aryan");
signUpUser("Aryan","landge@.com","starxg",false);
loginMe("honey","hon@hon.com")

// Arrow function 

const returnmesometing = (s: string): string => { return "something"};

const Marvel = ["spiderman","ironman","captain america"];

Marvel.map((hero): string => {
    return `My favroutie hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log("log something");  
}

function fail(msg: string): never{
    throw new Error(msg);
    
}


