const proto ={
    slogan : function(){
        return "this company is the best"
    },
    changeName : function(newName){
        this.name = newName
    }
}

//this create oliul object
const oliul  = Object.create(proto);
oliul.name = "joy";
// oliul.role = "Programer";
// oliul.changeName("shapla")

//this also create oliul object
const oliul1 = Object.create(proto,{
    name: {value:"harry", writable:true},
    role: {value: "programer"},
})
// oliul1.changeName("shapla")
// console.log(oliul1)

//employee constructor
function Employee (name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//slogan
Employee.prototype.slogan = function(){
    return `this company is the best. Regaeds, ${this.name}`;
}
let oliulObj = new Employee("shapla akter", 34900,34);
console.log(oliulObj.slogan());

//programmer

function programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience)
    this.language = language;
}
//Inherit this prototype
programmer.prototype = Object.create(Employee.prototype);

//Manually set this constructor
programmer.prototype.constructor = programmer;

let aminul = new programmer("aminul",3433,1, 'Javascript');
console.log(aminul)