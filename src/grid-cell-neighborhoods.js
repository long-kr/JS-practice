// Task: Given a 2D array, an (n) distance, and an array of [x,y] positive cell arrays
// Print out how many positive neighboring cells are found within the manhattan distance threshhold of the original positive cells.
// example: X is the original positive cell. 0 = negative; 1 = positive. n = 2; There are 13 positive cells - 12 neighbors (1), 1 original (X)
// 0 0 1 0 0
// 0 1 1 1 0
// 1 1 X 1 1
// 0 1 1 1 0
// 0 0 1 0 0

// Hint: Manhattan distance: [x1 - x2] + [y1 - y2]

// Refer back to the grid cell neighborhood PDF for more details, assumptions, and examples
// Please do not hesistate to reach out with an questions!

// Parameters
// collXCount: number - number of columns
// rowYCount: number - number of rows
// n: number - distance threshold
// positiveCellsXYArray: Array<Array>> - array of [x,y] arrays. Ex: [[1,3], [5,5], [5,8]]
function main(collXCount, rowYCount, n, positiveCellsXYArray) {
	let time = 0;
	let count = 0;
	let set = new Set();
	// *** Implement this function ***
	// return if positiveCellsXYArray.length = 0
	if (positiveCellsXYArray.length === 0) {
		console.log(time);
		console.log("total count of positive cells is: ", count);
		return;
	}

	// return if case n > max(X, Y) and positiveCellsXYArray.length > 0
	if (
		n > Math.abs(collXCount - 1) + Math.abs(rowYCount - 1) &&
		positiveCellsXYArray.length
	) {
		console.log(time);
		console.log("total count of positive cells is: ", collXCount * rowYCount);
		return;
	}

	// for each positive cell
	for (const point of positiveCellsXYArray) {
		const a = point[0],b = point[1];
		
		// loop from smallest to greatest |x-a| with n = |x-a| + |y-b|
		for (let dx = -n; dx + a < collXCount && dx <= n; dx++) {
			const x = a + dx;
			if(x < 0) continue;
			
			// forEach dx, we loop through smallest to greatest dy with |dy| = n - dx
			for (let dy = -n + Math.abs(dx); dy + b < rowYCount && dy <= n - Math.abs(dx); dy++) {
				time++;
				const y = b + dy;
				const key = `${x},${y}`;

				if(y < 0) continue;

				if (!set.has(key)) {
					set.add(key);
					count++;
				}
			}
		}
	}

	// iterate by each row
	// for (let row = 0; row < rowYCount; row++) {
	// 	// iterate each cell of row
	// 	for (let col = 0; col < collXCount; col++) {
	// 		// find manhattan distance with each positiveCell
	// 		for (const [x, y] of positiveCellsXYArray) {
	// 			time++
	// 			const manh = Math.abs(col - x) + Math.abs(row - y);
	// 			// if manh <= n: count++ then break to next point
	// 			if (manh <= n) {
	// 				count++;
	// 				break;
	// 			}
	// 		}
	// 	}
	// }
	// console.log(set);
	// console.log(set.size);
	console.log(time);
	console.log("total count of positive cells is: ", count);
}

// *** General test cases - feel free to expand and add more (we will be adding more when testing your code) ***
main(10, 10, 3, [[5, 5]]); //will return 25
main(10, 10, 2, [
	[7, 3],
	[3, 7],
]); //will return 26
main(10, 10, 3, [[2, 2]]); //will return 23
main(10, 10, 23, [[2, 2]]); //will return 100
main(1, 1, 23, [[2, 2]]); //will return 1
main(2, 10, 3, [[2, 2], [3, 2], [3, 3]]); //will return 8
main(100, 100, 4, [[2, 2], [3, 2], [3, 4]]); //will return 52
