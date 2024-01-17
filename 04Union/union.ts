let score: number | string = "89";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let Aryan: User | Admin  = {name: "Aryan", id: 594};

Aryan = {username: "Aryan",id: 345};
// Drawback of union
function getdbId(id: number | string){
    if (typeof id === "string"){
        id.toLowerCase()
    } 
    
}

getdbId("4");
getdbId(4);


// Array 

const data: number[] = [1,2];
const data1: string[] = ["1","3"];

// Mistake 

const data3: (string | number | boolean)[] = ["1",34,true];

