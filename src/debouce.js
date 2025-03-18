/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
function debounce(func, wait = 0) {
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
    console.log("test " + this.namea);
}


const obj = {
    namea: "long",
    debounce: debounce(test, 1000),
}

obj.debounce();


