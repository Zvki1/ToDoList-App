


//new try 
// selection du boutoun add task
const add=document.getElementsByClassName("Add")[0];
//recuperation du contenu de l'input 
const input=document.getElementsByClassName("input")[0];
//ajouter le event listener au boutoun adda
add.addEventListener("click",fn);
input.addEventListener("keydown",test);

//recuperation du ul
var taskList=document.getElementsByTagName("ul")[0];
//definir la fonction 
function fn(event){
var inputValue=document.getElementsByClassName("input")[0].value;
if((inputValue.trim()!=="")){
var newTask= document.createElement('li');
// ajout du input dans le li 
newTask.innerHTML="<div class=\"del_icon\"></div> "+inputValue; //li est construit il faut l'ajouter maintenant
taskList.appendChild(newTask);
document.querySelector('.input').value = '';
}

}
function test(event){
  if(event.key=="Enter"){
    fn(event);
  }
}


// la suppression d'une task 

var taskList = document.querySelector("ul");

taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("del_icon")) {
    var listItem = event.target.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
});


