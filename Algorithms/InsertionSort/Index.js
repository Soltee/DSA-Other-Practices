 	
function insertionSort(arr){

	//i = 1, beacsue first is assumed sorted
	for(let i = 1; i < arr.length; i++){ 
		
		let numberToInsert = arr[i];

		let j = i - 1

		// console.log(j, arr[j])

		while(j >= 0 && arr[j] > numberToInsert) {
			arr[j+1] = arr[j]

			j = j - 1
		}

		arr[j+1] = numberToInsert

		//toInsert = arr[i] = arr[1] = 6
		//j = 1 - 1 = 0 = arr[0]
		//0 >= 0 && arr[j], 4 > 6, no
		//arr[j+1], 0 + 1 = arr[1] = 6
		//[4, 6, -5, 10, 2]
		//
		//i = 2
		//insert - arr[2] = -5
		//j =  2 - 1 = 1 = arr[1]
		//1 >= 0 && 6 > -5, yes
		// - arr[1+1] = arr[2] = arr[1] -- 6
		// - arr[1+1] = arr[2] = -5
		// [4, -5, 6, 10, 2]
		// while
		// insert 
	}
	
}

const arr = [4, 6, -5, 10, 2];

insertionSort(arr)

console.log(arr, "\n") // -5, 2, 4, 6, 10

// Big-O = O(n*n) = Quadratic

