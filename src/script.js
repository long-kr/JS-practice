let webWorker = new Worker("../src/webWorker.js");

const addButton = document.getElementById("add-button");
const triggerButton = document.getElementById("trigger-button");
const user = document.getElementById("user");
const count = document.getElementById("count");

function addOne() {
    let num = Number(count?.innerHTML);

    if(isNaN(num)) return;

    num = Number(num) + 1;

    if(count) count.innerHTML = num.toString();
    
}


addButton?.addEventListener("click", addOne);
triggerButton?.addEventListener("click", () => {
    if(window.Worker) webWorker.postMessage("https://jsonplaceholder.typicode.com/users/1");
});

webWorker.onmessage = e => {
    
    Object.entries(e.data).forEach(([key, value]) => {
        const childElement = document.createElement("p");
        childElement.innerHTML = `${key}: ${value}`;
        console.log(childElement)
        user?.appendChild(childElement);
    })

    webWorker.terminate();
    webWorker = undefined;
}
