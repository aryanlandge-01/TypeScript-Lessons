function detectType(val: number | string){
    if (typeof val === "string") {
       return val.toLowerCase()
    }

    return val + 4;
}


function checkId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }

    return id.toLocaleLowerCase()
}


function printAll(strs: string | string[] | null){

    if(strs){
        if(typeof strs === "object") {
            for (const s of strs) {
                console.log(s);      
            } 
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

// in operator

type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

// detection

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
    //   (parameter) x: Date
    } else {
      console.log(x.toUpperCase());
                 
    //   (parameter) x: string
    }
  
}


function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

export{}