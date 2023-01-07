//Last in first out, data structure
//Global Execution Context
//the Last will get out first

/// Use Cases
/// - browser history tracking
/// - Undo operation when typing
/// - Expression Conversions
/// - Call Stack in Javascript runtime 
/// 

//Implemention
// - Push (element) 
// 	 - add an element to the top of stack
// - Pop 
// 	 - Remove the top most element of the stack
// - peek
// 	 - get the value of the top most element withour removing it
// - isEmpty
// 	 - check if the stack is empty
// - size 
// 	 - to get the number of elements of the stack
// - print 
// 	- to visualize the elements of the stack
// 	
// 	

class Stack {

	constructor() {
		this.items = []
	}

	push(element) {
		this.items.push(element)
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1]
	}

	isEmpty() {
		return this.items.length === 0
	}

	size(){
		return this.items.length;
	}

	print(){
		console.log(this.items);
	}

}

const stack = new Stack()
stack.push(1);
stack.push("helllo");
stack.push([
	"hle"
]);

stack.size();
stack.pop();
stack.size();
console.log(stack.isEmpty());
stack.print();

//Insetion & Removal of elements is O(1) = constant time complexity
// WHEREAS AN ARRAY has O(n) = linear IF you choose to insert or remove at index 0
// 
// 
// 
