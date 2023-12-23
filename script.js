// multiselector
//document.getElementsbyclassname
let list = document.getElementsByClassName('sample-class');
list[0].style.background = 'red';
list[0].style.color= 'white';
list[0].style.padding = '10px';
list[0].textContent = 'Hello world';
//console.log(list);

//document.getElementByTagname()
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');

let lis = Array.from(list);
lis.forEach(function(item){
    console.log(item.textContent);
});
//document.querySelectorAll()
//id -> #
//classname-> .
//tagname -> nothing

list = document.querySelectorAll('sample-class');
console.log(list);