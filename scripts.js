const input=document.getElementById("input")
const list_container = document.getElementById("list-container")
function addTask() {
    if(input.value === ''){
        alert("there isn't any task written please write it!");
    }else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list_container.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value ="";
}
list_container.addEventListener("click",function (e) {
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
})