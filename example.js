var list=document.getElementById('to-do-list')
var btnAdd=document.getElementById("add-item")
var inputBox=document.getElementById('todo-input')
var btnUpdate = document.getElementById('update-item')
var btnRemove = document.getElementById('remove-item')
var remove = document.getElementById('icon')
var listItem = document.getElementById('listItem')
var currentInputValue=' '

function createNewNode(){
var newListElement= document.createElement("li");
newListElement.classList.add('listItem');
var textNode=document.createTextNode(currentInputValue);
newListElement.appendChild(textNode);
return newListElement;
}

function addListItem(){
if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== ''){
var newListElement=createNewNode();
var delIcon = document.createElement("i");
delIcon.classList.add('fas');
delIcon.classList.add('fa-trash');
list>listItem.appendChild(delIcon);
list.appendChild(newListElement);

inputBox.value='';
currentInputValue='';
}
else{
alert("please enter a valid todo item")}
}
/// ruko kya ruko
inputBox.addEventListener('input',function(e){
currentInputValue=e.target.value;
//yha se di h wo done ok g
});

btnAdd.addEventListener("click",addListItem)
btnUpdate.addEventListener('click',function(){
var firstElement = list.firstElementChild;
var newListElement=createNewNode();
list.replaceChild(newListElement,firstElement)
})

btnRemove.addEventListener('click',function(){
var firstElement=list.firstElementChild;
list.removeChild(firstElement)
})

inputBox.addEventListener('keyup',function(e){
if(e.keyCode===13){
addListItem();
}
})