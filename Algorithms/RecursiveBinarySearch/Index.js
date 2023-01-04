function search(arr, target, leftIndex, rightIndex){

	if(leftIndex > rightIndex) return -1;

	let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

	if(target === arr[middleIndex]) return middleIndex;

	if(target < arr[middleIndex])
	{

		return search(arr, target, leftIndex, middleIndex - 1)

	} else {

		return search(arr, target, middleIndex + 1, rightIndex)

	}

}

function recursiveBinarySearch(arr, target)
{	

	return search(arr, target, 0, arr.length - 1);

}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10), "\n") // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6), "\n") // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20), "\n") // -1

// Big-O = O(logn) - logarithimic beacuse inputs size decrease by half.