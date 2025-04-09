
// export function printSomething() {
//     while(i < 1000000000) {
//         i++;
//     }
//     console.log(i);
// }

onmessage = e => {
    let i = 0;
    console.log(e.data);
    while(i < 1000000000  ) {
        i++;
    }
    console.log(i);
    postMessage(i);
}