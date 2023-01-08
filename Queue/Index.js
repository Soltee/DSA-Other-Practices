// Queue Implementaon
// Sequencal collection of elenents
// FIFO
// Useful
// - Printers doing multiple doucments
// - CPU Task Scheduleing
// - Callback queue in Javascript RUntime
// 

//Implemention
// - Enqueue (element) 
// 	 - add an element to the  queue
// - Dequeue 
// 	 - Remove the oldest element in the queue
// - peek
// 	 - get the value of the front most element withour removing it
// - isEmpty
// 	 - check if the queue is empty
// - size 
// 	 - to get the number of elements of the queue
// - print 
// 	- to visualize the elements of the queue
// 	


class Queue {

	constructor() {
		this.items = [];
	}

	enqueue(element) {
		this.items.push(element)
	}
	
	//O(n) - Linear Complexity
	dequeue() {
		return this.items.shift();
	}


	isEmpty() {
		return this.items.length === 0
	}

	peek() {

		return !this.isEmpty() ? this.items[0] : false;

	}

	size(){
		return this.items.length;
	}

	print(){
		console.log(this.items.toString());
	}

}

const queue = new Queue()
queue.enqueue(1);
queue.enqueue("helllo");
queue.enqueue([
	"hle"
]);

console.log(queue.peek());
queue.size();
queue.dequeue();
queue.size();
console.log(queue.isEmpty());
queue.print();
console.log(queue.peek());

//Insetion & Removal of elements is O(1) = constant time complexity
// WHEREAS AN ARRAY has O(n) = linear IF you choose to insert or remove at index 0
// 
// 
//