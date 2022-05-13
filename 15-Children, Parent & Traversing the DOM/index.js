let sel = document.querySelector(".no");//amar no class ke dhore tar element ta ke console dekhte pari

sel = document.querySelector(".container");//amar upore je element ta ke dhorchi tar parent child ke dekhte pari 
// console.log(sel);

//abar amara chaile container er joto chaild node ache se gulakeo print kore dekhte pari 
let cont = document.querySelector(".container");
// console.log(cont.childNodes);

//without text comment just tag gule ke print korte chaile 
// console.log(cont.children);
//type of nodes
// 1. element 
// 2. attribute
// 3. text node 
// 8. comment
// 9. document
// 10.doctype

let nodeName = cont.childNodes[2].nodeName;
// console.log(nodeName);

//children er children and tar children a ki ache ta travel kore dekhte pari
let container = document.querySelector('.container');
// console.log(container.children[1].children[0])

//container er vitorer first element ke pete
// console.log(container.firstElementChild);

//container er vitorer first childNode and lastElementchild dekhte 
// console.log(container.childNodes)
// console.log(container.lastElementChild)

//container er vitore koyta childElemnt ache ta dekhte 
console.log(container.childElementCount);

//container class firstElementChild er pore kon element ache ta dekhte (ekhane jodi text comment thake tahole tao dekhabe)
console.log(container.firstElementChild.nextSibling);
//with out text comment just tag gula dekhte 
console.log(container.firstElementChild.nextElementSibling);
