function createList() {
    let container = document.getElementById("test");
    let val = document.getElementById("myInput").value;
    let node = document.createElement("li");
    node.innerHTML = val;
    container.appendChild(node);
}