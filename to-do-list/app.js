//lets begin the show
//organize it first
//notes: this is not express aplication, this is vanila basic javascript without mvc

//selector
//note: we specify user-input name of form iwth document.querySelector
const toDoInput = document.querySelector('input');
const addButton = document.querySelector('.add-button');
const toDoList = document.querySelector('.To-Do-List');


//functions
const addToDo = (event) => {
    //event.prevenDefault is used to prevent refresh page
    event.preventDefault();
    //to make a div consist of list
    const toDoDiv = document.createElement('div');
    //add class to the toDoDiv
    toDoDiv.classList.add('todo');
    //create list
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    //add class to the newToDo
    newToDo.classList.add('todo-item');
    //nest the toDoDiv to newToDo (search for appendChild in documentation)
    toDoDiv.appendChild(newToDo);
    //now we need to give function to the button
    //checked button
    const checked = document.createElement('button');
    checked.innerHTML = '<i class="fas fa-check" ></i>';
    checked.classList.add('checked-button');
    toDoDiv.appendChild(checked);
    //delete button
    const deleted = document.createElement('button');
    deleted.innerHTML = '<i class="fas fa-trash" ></i>';
    deleted.classList.add('deleted-button');
    toDoDiv.appendChild(deleted);
    //now that we have the model, let's attach it to ul using append
    toDoList.appendChild(toDoDiv);
    //clear to do input area
    toDoInput.value = "";
}

//function to remove/ delete item

const removeItem = (e) =>{
    const item = e.target;
    //let's delete the item
    if(item.classList[0] === 'deleted-button' || item.classList[0] === 'checked-button'){
        const todo = item.parentElement;
        todo.remove();
    }
}


//event listener
//note: this section is for when user do something in html, the javascript will listen
//      and the the task that we specify them to do
// what we did with addButton.addEventListener is that we put in two parameter, 
// the first one is 'click' which is the event indication that we specify the javascript to listen to
// and the second one is callback which is a function that we pass in as parameter in this case
// is addToDo
addButton.addEventListener('click', addToDo);

//no that we can add item, we need to be able to delete them as well
//add new eventlistener
toDoList.addEventListener('click', removeItem);


