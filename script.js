const inputbox = document.getElementById("input-box");
const button = document.getElementById("button");
const listitems = document.getElementById("list-container");
button.addEventListener("click", () => {
    const inputvalue = inputbox.value.trim();
    if (inputvalue === '') {
        alert("Please write anything ")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listitems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    savedata();
});

listitems.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data",listitems.innerHTML);
}
function showtask(){
    listitems.innerHTML=localStorage.getItem("data")
}
showtask();
