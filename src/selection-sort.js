function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let index = i;
        let min = Number.MAX_SAFE_INTEGER;

        for (let j = i + 1; j < arr.length; j++) {
            // find smallest replace with index
            const num = arr[j];
            if (!isNaN(num) && num < min) {
                min = num;
                index = j;
            }
        }

        if (min < arr[i]) {
            arr[index] = arr[i]
            arr[i] = min;
        }
    }

    return arr;
}

console.log(selectionSort([7, 2, 4, 3, 1, 2]));