// Creates new list when clicking button
document.querySelector("#addButton").onclick =
function tdItems(){
    let items = document.getElementById("list-items").value;
    console.log (items)
    document.querySelector("#itemPlace").innerText = `${items}` 

}

// let list = document.getElementById("js-td-list");
// items.forEach((item)=>{
//     let li = document.createElement("li");
//     li.innerText= item;
//     list.appendChild(li)
// })