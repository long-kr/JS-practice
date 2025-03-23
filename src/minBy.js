/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
function minBy(array, iteratee) {
    const mapped = array.map(iteratee);
    const sorted = mapped.toSorted();
    const index = sorted[0] ?  mapped.indexOf(sorted[0]) : undefined;

    return array[index];
  }

  console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.m));