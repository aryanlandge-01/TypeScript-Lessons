interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: number, // optional properties 
    // startTrail: () => string
    startTrail(): string,
    getcoupon(couponname: string): number
}


// reopening of the interface
interface User {
    githubId: string
}

// inheritance of the interface

interface Admin extends User {
    role: "access" | "monk"
}

const Aryan: Admin = {
    dbId: 34343,
    email: "landge@.com",
    userId: 3532,
    githubId: "aryan09", // reopened property
    role: "access", // inheritance 
    startTrail: () => {
        return "trail started"
    },
    getcoupon: (name: "winter30") => {
         return 80
    },
}


export{}