// // selection le add button
// var Add=document.getElementsByClassName("Add");
// var list=document.getElementsByTagName("ul");
 
// function addTask(){
//     var input= document.getElementsByClassName("input").value;
//     var newTask=document.createElement('li');
//     newTask.textContent=input;
//     list.appendChild(newTask);
//     input=" ";
// }

// Add.addEventListener('click',addTask);





// // Sélectionner le bouton "Add Task"
// var addButton = document.querySelector('.Add');

// // Sélectionner la liste des tâches
// var taskList = document.querySelector('ul');

// // Fonction pour ajouter un nouvel élément <li>
// function addTask() {
//   // Récupérer la valeur de l'input
//   var inputValue = document.querySelector('.input').value;

//   // Créer un nouvel élément <li>
//   var newTask = document.createElement('li');

//   // Ajouter le contenu dans l'élément <li>
//   if(!(inputValue=="")){
//   newTask.innerHTML = "<div class=\"del_icon\"></div>"+inputValue;

//   // Ajouter l'élément <li> à la liste des tâches
//   taskList.appendChild(newTask);

//   // Effacer le contenu de l'input après l'ajout de la tâche
//   document.querySelector('.input').value = '';
//   }
// }

// // Ajouter un écouteur d'événement pour le clic sur le bouton "Add Task"
// addButton.addEventListener('click', addTask);



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


