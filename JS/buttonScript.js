//buttonScript.js
function displayMessage(){
    window.alert('Hello')
}

function addParagraph(){
    const newElement = document.createElement('p');
    newElement.textContent='New Paragraph';
    document.querySelector('.container').appendChild(newElement);
}

function removeParagraph(){
    const list = document.querySelector('.container');
    list.children[list.children.length-1].remove();
}
const btn1=document.querySelector('#btn-1');
const btn2=document.querySelector('#btn-2');
btn1.addEventListener('click', addParagraph);
btn2.addEventListener('click', removeParagraph);