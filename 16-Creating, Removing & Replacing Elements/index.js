//DOM er majhe element create korte 
let element = document.createElement('li');

// li er  class and id add korte 
element.className= 'childul';

//id set korte 
element.id ='createli';

//attribute ba title set korte

element.setAttribute('title','mytitle');

//li tag ta ke ul er vitore niye jete ba DOM er vitore niye jete append korte 
//prothome ul ta ke dhorte hobe 
let ul = document.querySelector('ul.this');
ul.appendChild(element);
//il er vitore text add korte 
element.innerText='hello oliul';

//li er vitorer text take bold korte 
element.innerHTML='<b>hello oliul</b>';

// console.log(element);

//element ke replace korte 
let elem2 = document.createElement('h3');
elem2.id= 'elem2';
elem2.className = 'elem2';

//h3 tag er majhe text add korte 
let tnode = document.createTextNode('love you shapla');
elem2.appendChild(tnode);

//element er sathe elem2 ke replace korte 
element.replaceWith(elem2)

// console.log(elem2);

//child ke replace korte 
let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('ful'));//ekhane element er sathe replace kora hoyche 

//child ke removed korte 
myul.removeChild(document.getElementById('lul'))
console.log(myul)