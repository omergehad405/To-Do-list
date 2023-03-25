let input = document.querySelector("#task");
let addBtn = document.querySelector("#add");
let listContainer = document.querySelector("#list-container");

addBtn.addEventListener("click" , function() {
    if(input.value === ''){
        alert("You Must Enter A Task")
    }else{
        let li = document.createElement("li");  
        li.innerHTML = input.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
});

listContainer.addEventListener("click" , function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} , false );

function saveData() {
    localStorage.setItem("data" , listContainer.innerHTML)
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData() ;