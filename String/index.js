
function callAfter(i){

	setTimeout(function() {
		
		console.log(i);

	}, i * 1000);
	
}

function print(){
	for(var i = 0; i < 3; i++){
		callAfter(i)
	}
}



// print();

/* Get the highest number of occureance from a string*/
/* Only alphanumeric, a-z A-Z*/
function getHigherAlphaNumericOccurance(string)
{
	let highestCount = 0;
	let highestOccurrenceChar = null;
	const charDic = {}

	for(let i = 0; i < string.length; i++)
	{
		const Char = string[i];

		// Go to next if not aphabetical
		if(!(/[a-zA-Z]/).test(Char)) continue; 

		//2. Optimized apporaches;
		// if charDic contains the currentChar increment by 1
		// If not set to 0
		// charDic key's value is to set , so doesnot matters const or let charDic
		charDic[Char] = (charDic[Char] || 0) + 1


		if(charDic[Char] > highestCount){
			highestCount = charDic[Char]
			highestOccurrenceChar = Char;
		}

		// 1. First Approach
		// let occurance    = 0;

		// for(let j = 0; j < string.length; j++)
		// {
		// 	if(string[j] === Char) occurance++;
		// }

		// if(occurance >= highestCount){
		// 	highestCount = occurance;
		// 	highestOccurrenceChar = Char;
		// }

	}

	console.log(highestCount);

}

getHigherAlphaNumericOccurance("a1bca45CDA9ccca"); //a = 3

