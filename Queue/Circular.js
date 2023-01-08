// It is extended version of a regular queuue
// 
// - The size of the queue is fixed
// - A single block of memory is used 
// 	- as if the first element is connected  to tht last element
// - Alsomrefered as buffer / ring buffer
// - WIll reuse the empty block created d uring the dequeue peration
// - Great choice if working with queues of fixed maximum queue
// 

// - Enquueue and  Dequeue
// 

//Use cases
// - Clocks
// - Streaming Data , acts as a buffer
// - Traffic rights
// 

//Implemention
// - Enqueue (element) 
// 	 - add an element to the  queue
// - Dequeue 
// 	 - Remove the oldest element in the queue
// - isFull
// 	 - check if queue if full
// - isEmpty
// 	 - check if the queue is empty
// - peek
// 	 - get the value of the front most element withour removing it
// - size 
// 	 - to get the number of elements of the queue
// - print 
// 	- to visualize the elements of the queue

class CircularQueue {

	constructor(capacity) {
		this.items = new Array(capacity)
		this.capacity = capacity
		this.currentLength = 0;
		this.rear  = -1;
		this.front = -1;
	}

	isFull(){
		return this.currentLength === this.capacity
	}

	isEmpty(){
		return this.currentLength === 0
	}

	enqueue(element) {

		if(!this.isFull()) {

			this.rear = (this.rear + 1) % this.capacity; //0
			this.items[this.rear] = element
			this.currentLength++ //1

			if(this.front === -1) {
				this.front = this.rear; //this.front = 1
			}

		}
		
	}

	dequeue() {

		if(this.isEmpty()) return null;

		const item = this.items[this.front]

		this.items[this.front] = null

		this.front = (this.front + 1) % this.capacity;

		this.currentLength --;

		if(this.isEmpty()) {
			this.front = -1
			this.rear  = -1
		}

		return item;
		

		// How it works
		// 10, 20, 30, 40, 50
		// not empty
		// front is this.items[0] = 10
		// this.items[0] = null
		// this.front = 0 + 1 = 1 %  5 = 1
		// this.lenght = 4 - 1 = 3
		
	}

	peek(){
		return (!this.isEmpty()) ? this.items[this.front] : null;
	}

	print(){
		
		if(this.isEmpty()) return null;

		let i;
		let str = '';

		for(i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
			str+= this.items[i] + " "
		}

		str += this.items[i]

		console.log(str)

		// 0, 1,2,3,4
		// 10, 20, 30, 40, 50
		// i = 0, rear = 4
		// 0 = (0 + 1) % 5 = 2, then 1, 2, 3, but not 4
		// str = 10, 20, 30, 40
		// AND after loop
		// last time the str += 50
		// now prints (10, 20, 30, 40, 50)

	}

}

const cq = new CircularQueue(5);
console.log(cq.isEmpty());

cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.enqueue(40)
cq.enqueue(50)

console.log(cq.isFull());
console.log(cq.isEmpty());
console.log(cq.peek());
console.log(cq.dequeue());
console.log(cq.peek());
cq.print();

console.log("Module Checking..")
console.log((0 + 1) % 5)
console.log((1 + 1) % 5)
console.log((2 + 1) % 5)
console.log((3 + 1) % 5)
console.log((4 + 1) % 5)
console.log((5 + 1) % 5)
console.log((6 + 1) % 5)

