//create a function
function greet(name,thanks){
    let messge =`Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!`;
    return messge;
}

//call function
let val = greet(name,'thanks a lot');
console.log(val)

//object er vitore function used
const myobj = {
    name: "oliul",
    game: function(){
        return "GTA"
    }
}
console.log(myobj.game);

//Array er vitore function used
arr= ['fruit', 'vagetable','grossery'];
arr.forEach(function(element,index) {

    console.log(element,index)
});