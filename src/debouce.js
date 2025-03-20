/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
function debounce(func, wait = 0) {
    this.name = "long2";
    if(typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    let timeoutID;

    return function(...args) {
      if(timeoutID) clearTimeout(timeoutID);

      timeoutID = setTimeout(() => func.apply(this, args), wait);
    }
}

const test = function() {
    console.log("test " + this.name);
}


const obj = {
    name: "long",
    debounce: debounce(test, 1000), 
}

//The this context inside the debounce function is determined 
//by how the function is called. In this case, this does not refer 
// to the obj object but rather the global context or the context 
// in which debounce is called.
obj.debounce(); // long

const debounced = debounce(test, 1000);

debounced() // long2

