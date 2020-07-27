//let message: string = 'Hello World';
//console.log(message);

// class example
class Student {  
    studCode: number;  
    studName: string;  
  
    constructor(code: number, name: string) {  
            this.studName = name;  
            this.studCode = code;  
    }  
  
    getGrade() : string {  
        return "A+" ;  
    }  
}  

//Creating an object or instance     
let obj = new Student(101, "Virat Kohli");