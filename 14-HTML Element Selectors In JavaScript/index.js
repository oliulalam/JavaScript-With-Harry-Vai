// let element = document.getElementById('myfirst');
// // element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color ='red';
// element.innerText ="oliul";
// element.innerHTML = "<b>oliul</b>";
// console.log(element);

//Queryselector

// let sel =document.querySelector('#myfirst');
// sel=document.querySelector('.child');
// sel=document.querySelector('div');
// sel
// console.log(sel);

//multiple selector

let elems =document.getElementsClassName('child');
 elems =document.getElementsByTagName('container');
 elems =document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element =>
    {
        console.log(element);
        elems.style.color = "blue";
    });



