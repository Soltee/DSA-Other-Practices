// Poort sorting algorithem
// Used as primary good introduction to sorting 
// Compare the adjacent elements in the array and 
// 	- swap the positions if they are not in intended order
// 	- repeat the process as you step through each element in the array
// 	- Once you step throught all the elements in the array not swaps,  
// 	- then the array is SORTED
// 	
// 	
// 	
function bubbleSort(arr){

	let swapped;

	do {

		swapped = false

		for(let i = 0; i < arr.length - 1; i++){ //length -1 beacuse last element should not be compared to another
			
			if(arr[i] > arr[i + 1]){

				console.log(arr[i], "\n");

				let temp = arr[i]; 
				arr[i]   = arr[i+1]
				arr[i+1] = temp

				swapped = true;
			}

			// 4 !> 6
			// 6 > -5 greater
			// 	- arr[1] = -5
			// 	- arr[2] = 6
			// 	- swapped is true
			// 	[ 4, -5 , 6 , 10, 2 ]
			// 	6 !> 10
			// 	10 > 2
			// 	  - arr[3] = 2
			// 	  - arr[4] = 10
			// 	  - swapped = true
			// [4 , -5, 6, 2, 10]
			// do while so, again
			// 4 > -5 
			//  - arr[0]  = -5
			//  - arr[1]  = 4
			//  - swapped = true
			// 4 !> 6
			// 6 > 2
			//  - arr[2] = 2
			//  - arr[3] = 6
			//  - swapped = true
			// 6 !> 10
			// 
			// [-5 , 4 , 2 , 6, 10]
			// do while again
			//  -5 !> 4
			//  4 > 2
			//   - arr[1] = 2
			//   - arr[2] = 4
			//  4 !> 6
			//  6 !> 10
			//  
			//  Final Array - [-5 , 2 , 4, 6, 10]
		}
		
		console.log(swapped, "\n");


	} while (swapped) 

}

const arr = [4, 6, -5, 10, 2];

bubbleSort(arr)

console.log(arr, "\n") // -5, 2, 4, 6, 10

// Big-O = O(n*n) = Quadratic

