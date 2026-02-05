let input = document.querySelector("#input1");
let button = document.querySelector("button");
let ol = document.querySelector("ol");

button.addEventListener("click", taskHandler);

function taskHandler() {
    let data= input.value;
    if (data=="") {
        alert("Please enter a task before adding");   
        return
    }
    let li = document.createElement("li");
    li.innerHTML = data;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", delete_func);
    
    function delete_func() {
        li.remove();
    }

    delBtn.addEventListener("click", delete_func);

    li.appendChild(delBtn);
    ol.appendChild(li);
    input.value="";

}