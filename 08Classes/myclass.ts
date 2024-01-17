class User {

    protected _courseCount = 1

    // private property 

    private getGender(){
        console.log("prohi");
        
    }


    readonly city: string = "mumbai"
    constructor(public Id: number, public name: string){

    }
   get getAppleEmail(): string{
    return `apple${this.Id}`
   }

   get courseCount(): number{
    return this._courseCount
   }

   // cannot set the type the return

   set courseCount(courseNum) {
      if (courseNum > 499) {
        throw new Error("Course is not popular")
      }
      this._courseCount = courseNum
   }
}

class subUser extends User {
    // it cannot the private stuff 

    ifFamily: boolean = true
    changeCourseCount(){
      this._courseCount = 5
    }
} 

const aryan = new User(9899,"aryan")

// Access modifier as like pubic and private


