const marks = [34, 23, 55, 66, 77, 12];
const fruits = ['orang', 'apple', 'pineapple'];
const mixd = ['str', 48, [11,22]];
const arr = new Array (23,123,143,'orgasm');

console.log(arr);
console.log(marks);
console.log(mixd);

//0 index a je value ta ache ta show korbe 
console.log(fruits[0]);

//array er majhe koto ta element ache ta show korbe. length ekta properties
console.log(fruits.length);

//variable er nam niye check korbe je ei ta array ki na . Array.isArray ekta mathod
console.log(Array.isArray(arr));

//ei vabe arr er index number ke dhore array element change kora jay
arr[0] = "Oliul";
console.log(arr);

//indexOf er majhe value bosiye value er index number koto ta ber korte paren
let value = marks.indexOf(55);
console.log(value);

//array list er sesh value add korte
marks.push(345);

////array list er prothom a value add korte
marks.unshift(223);
//array list er sesh value deleted korte
marks.pop();
//array list er prothom value deleted korte
marks.shift();
//index number dhore value deleted korte
marks.splice(2,3);
console.log(marks);

//2 ta array list ke add korte 
let marks1 = [1,2,3,4,5,6];
let marks2 = [122,222,333,44,55,0];
console.log(marks1.concat(marks2));


//Object 

let myobject = {
    name : "Oliul Alam",
    id: 1803015020,
    dpert: "CSE",
    data1: [4,5,6,7,8]
}
console.log(myobject);
//amar chaile jekono ekta ke call kore dekhte pari
console.log(myobject.name);