/**
 * @param {number} initialValue
 * @return {Function}
 */
function makeCounter(initialValue = 0) {
    let count = initialValue;
    return () => count++; // return the current count and then increment it
}


const counter = makeCounter(0);

console.log(counter());
console.log(counter());
console.log(counter());

