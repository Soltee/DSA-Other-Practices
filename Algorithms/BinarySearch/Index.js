function binarySearch(arr, target)
{	
	// First sort the array  if not sorted
	let leftIndex = 0
	let rightIndex = arr.length - 1;

	while(leftIndex <= rightIndex){

		console.log(arr[leftIndex], arr[rightIndex])

		let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

		if(target === arr[middleIndex]) return middleIndex;

		if(target < arr[middleIndex])
		{
			rightIndex = middleIndex - 1
		} else {
			leftIndex = middleIndex + 1;
		}

		// For 10, in [-5, 2, 4, 6, 10]
		// Middle 
		// 	- arr[0] = -5, arr[4] = 10 
		// 	- (-5 + 10 ) / 2 = 2 
		// 10 !== arr[2], 4 
		// 10 > 4, arr[2], so 
		// leftIndex = 2 + 1 = 3
		// rightIndex = 4
		// Again
		// arr[3] + arr[4] = ( 6 + 10 ) / 2 = 8
		// 8 !== arr
	}

	return -1;



}

console.log(binarySearch([-5, 2, 4, 6, 10], 10), "\n") // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6), "\n") // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20), "\n") // -1

// Big-O = O(logn) - logarithimic