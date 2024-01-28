const score: Array<number> = [];

const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identitytwo(val: any): any{
    return val;
}

function identitythree<Type>(val: Type): Type {
    return val
}

// identitythree(false)

function identityFour<T>(val: T): T{
   return val;
}

interface Bootle{
    brand: "milton",
    type: number
}

function identityfive<Bootle>() {
    
}


// how to declare an array

function getProducts<T>(product: T[]): T {
    const getindex = 4
    return product[getindex]
}


const getCloths = <T,>(cloth: T[]): T => {
    // common syntax
    return cloth[3]
}

// getCloths(["pants"])


function hello<T,U extends number>(val:T, ano:U):object {
   return{
        val,
        ano
   }
}


// hello(3,8)

// generics in classes 

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addtoCart(product: T){
        this.cart.push(product)
    }

    
}


 




export{}