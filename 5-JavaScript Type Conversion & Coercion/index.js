// type conversion

//jekono data type ke string a convate korte 
let myVar ;
myVar = 34;
myVar = String(34);
console.log(myVar, (typeof myVar))

//string (array list take dhore ekhane dilei done)
let myArray = String([3, 5, 6, 7, 8]);
//console.log(myArray.length, (typeof myArray));
console.log(myArray, (typeof myArray));

//boolean ke string a nite
let booleAn = String(true);
console.log(booleAn, (typeof booleAn));

//date ke string a nite
let date = new Date();
console.log(date, (typeof date));


// ei vabeo string a convart kora jay
let i = 8;
console.log(i, toString());

//string theke number a convar korte 

let stri = Number('45.34');
//stri = Number(true);
stri = Number(false);
stri = Number([4, 5, 6, 7, 8])
console.log(stri, (typeof stri));


//type Coercion
 let myStr = "4534";
 let myNum = 34;
 console.log (myStr + myNum);
 // ekhane out put asbe concatenetion kore number take string a convart kore dibe 







