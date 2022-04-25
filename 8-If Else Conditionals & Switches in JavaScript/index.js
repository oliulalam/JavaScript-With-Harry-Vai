console.log("tut 8");


// const age= 65;

// if (age==10){
//     console.log("age is 10")
// }
// else if(age==65){

//     console.log("age is 65")
// }
// else{
//     console.log("age is not 10")
// }

//Age er value er type hocche string
const age= "65";
if (age==10){
    console.log("age is 10")
}
// (===) ei operator er kaj holo type and value check kora jodi 2 tai match kore to age is 65 print korbe .. r jodi match na kore tahole age is not 65 print korbe

// amader condition er sathe match kore tai print korbe age is 65 
else if(age==="65"){

    console.log("age is 65")
}
else{
    console.log("age is not 10")
}

var notEqual = 35;
// (!=) not equal
// (!==) not double equal -> value and type is not matching 
if (notEqual !==34){
  console.log(" not equal 34");// condition false hoyche 
}
else{
    console.log("equal 34")
}

//variable defined kora ache ki na ta check korte 

var vari = 23;// var jodi define kora thake to vari is defined dekhabe r na hole else chole jabe.
if (typeof vari !== "undefined"){
    console.log("vari is defined");
}
else {
    console.log("var is not defined");
}

// true false check korte 
var doseDrive= true; //jodi amader condition false hoy to tahole else a chole jabe 
if(doseDrive){
    console.log("you can drive");
}
else{
    console.log("you can not drive");
}

var age1 = 14;
var doseDrive1 = true;
// if(doseDrive1 || age1>18) // (||)-> jekono ekta condition true hole print korbe
if(doseDrive1&&age1>18) // 2 ta condition true hote hobe
{
    console.log("you can drive");
}
else{
    console.log("you can not drive")
}

// Ternary operator
var age2 = 44;
console.log(age2 == 45? "age is 45" : "age is not 45");

// Switch case
var age3 = 19;
switch (age3){
    case 18:
        console.log("you are 18");
        break;
    case 11:
        console.log("you are 10");
        break;
    case 19:
        console.log("you are 19");
        break;
    default:
        console.log("you are unknown age");
        break;
}