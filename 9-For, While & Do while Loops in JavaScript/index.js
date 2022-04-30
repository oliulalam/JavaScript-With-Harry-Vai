//There are 3 type General loop 1. for loop, While loop, do while loop

//for loop
for(var i=0; i<10; i++){

    console.log(i);
}
console.log("first loop done")

//while loop
var i= 0;
while(i<20){
console.log(i);
i++;
}
console.log("second code done")
//do while loop

var k=0;
do{
    console.log(k+1);
    k++;
}
while(k<30);
console.log("thard code done");

var j=0;
do{
    console.log(j+1);
    if(j==5)
    {
        break; //1-5 pojonto print korar pore theme jabe break er karone 
    }
    j++;
}
while(j<30);
console.log("4th code done")

// var s=0;
// do{
//     console.log(s+1);
//     if(s==5)
//     {
//         continue; //1-5 pojonto print korar pore theme jabe break er karone 
//     }
//     s++;
// }
// while(s<30);
