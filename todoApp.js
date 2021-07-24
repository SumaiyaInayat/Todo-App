
var list = document.getElementById('list')
function addtodo(){
    var todoitem=document.getElementById('todo-item');

    //create li tag with text node
    var li =document.createElement('li');
    var litext=document.createTextNode(todoitem.value)
    li.style.color='white'
    li.style.margin="15px"
    li.appendChild(litext)
    
    
    //delete button
    var br=document.createElement('br')
    var deletbut=document.createElement('button');
    var deletetext=document.createTextNode("Delete")
    deletbut.setAttribute("class","btn")
    deletbut.setAttribute("onclick","dltitem(this)")// this keyword as an parameter duse kren ga y pura delete button pura ajye ga console 
    deletbut.appendChild(deletetext)
    li.appendChild(br)
    list.appendChild(li);
    li.appendChild(deletbut)
    list.appendChild(li);
    // now editting the value
    var editbut=document.createElement('button');
    var edittext=document.createTextNode("Edit")
    editbut.setAttribute("class","btn")
    editbut.setAttribute("onclick","edititem(this)")// this keyword as an parameter duse kren ga y pura delete button pura ajye ga console 
    editbut.appendChild(edittext)
    li.appendChild(editbut)
    list.appendChild(li);
    todoitem.value=""
    console.log(li);
}
function dltitem(e){
    e.parentNode.remove()
}
function dltall(){
    list.innerHTML=""
}
function edititem(e){
    var val= e.parentNode.firstChild.nodeValue;
    var editvalue=prompt("enter Edit value",val);
    e.parentNode.firstChild.nodeValue=editvalue;
    //    console.log(e.parentNode.childNodes[0])

}