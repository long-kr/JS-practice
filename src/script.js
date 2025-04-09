// import { printSomething } from './webWorker'
let webWorker = new Worker("../src/webWorker.js");

const addButton = document.getElementById("add-button");
const triggerButton = document.getElementById("trigger-button");
const count = document.getElementById("count");

function addOne() {
    let num = Number(count?.innerHTML);

    if(isNaN(num)) return;

    num = Number(num) + 1;

    count.innerHTML = num.toString();
}



addButton?.addEventListener("click", addOne);
triggerButton?.addEventListener("click", () => {
    if(!window.Worker) return;

    console.log(webWorker)
    webWorker.postMessage(["start"]);
});

webWorker.onmessage = e => {
    console.log(e.data);
    webWorker.terminate();
    webWorker = undefined;
}
