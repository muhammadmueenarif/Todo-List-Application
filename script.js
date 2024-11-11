const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask(){

    if(inputBox.value === ''){
        alert("Enter Some Data");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveTask();
}

/*Here's a breakdown of the code:
1.The listContainer.addEventListener("click", function(e) {...}); line attaches an event listener to the listContainer element. 
The listener waits for a click event and then executes the anonymous function provided. The e parameter represents the event object, 
which contains information about the event, such as the target element that was clicked.
2.Inside the anonymous function, the if(e.target.tagName === "LI") {...} condition checks if the target element of the click event 
is a list item (<li>). If the condition is true, it means that a list item was clicked.
3.If the condition is true, the e.target.classList.toggle("checked"); line toggles the "checked" class on the clicked list item. 
This class can be used to style the list item differently, such as adding a strikethrough or changing the background color.
4.After toggling the class, the saveTask(); function is called to save the updated list to the local storage. This ensures 
that the user's changes are persisted across page refreshes.
5.The else if(e.target.tagName === "SPAN") {...} condition checks if the target element of the click event is a span element (<span>). 
If the condition is true, it means that a close icon (represented by the "×" character) was clicked.
6.If the condition is true, the e.target.parentElement.remove(); line removes the parent element of the clicked span (which is the list item). 
This effectively removes the list item from the list.
7.After removing the list item, the saveTask(); function is called again to save the updated list to the local storage. 
*/

listContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
});


/*This function saves the data in the local storage of the browser. goto console > application, storage > local storage and you will
see saved data there. */
function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

/*
This function retrieves the value of the "data" item from the `localStorage` object and assigns it to the `innerHTML` 
property of the `listContainer` element.

The `localStorage` object allows web applications to store data locally within the user's browser. In this case, the `showTask()` 
function is used to display the saved tasks from the previous session. When the page is loaded, the `showTask()` function is called 
to populate the list container with the saved tasks. This ensures that the user's tasks are not lost when they refresh the page
 or close the browser.
 */
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}


showTask();        