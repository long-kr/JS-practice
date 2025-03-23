/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
    // make sure thisArg is not null
    if(!thisArg) thisArg = globalThis; 

    // and is an object
    thisArg = Object(thisArg);

    // create a unique property key and assign calling function to it
    // "this" is the function that calls myCall
    // thisArg is the object that we want to bind "this" to
    const fnKey = Symbol();
    thisArg[fnKey] = this;

    // call the function with the arguments
    const result = thisArg[fnKey](...argArray);

    // delete the unique property key
    delete thisArg[fnKey];

    return result;

}

function multiplyAge(multiplier = 1) {
    console.log(this.age * multiplier);
    return this.age * multiplier;
  }
  
  const mary = {
    age: 21,
  };
  
  const john = {
    age: 42,
  };
  
  multiplyAge.myCall(mary); // 21
  multiplyAge.myCall(john, 2); // 84