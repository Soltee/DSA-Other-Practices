class Queue {

	constructor() {
		this.items = {};
		this.rear  = 0;
		this.front = 0
	}

	//O(1) - Complexity
	enqueue(element) {
		this.items[this.rear] = element
		this.rear++;

		// this.items[0] = 10
		// rear = 1
		// this.items[1] = 10
		// rear = 2
		// this.items[2] = 10
		// rear = 3
	}

	//O(1) - Complexity
	dequeue() {
		const item = this.items[this.front]
		delete this.items[this.front]
		this.front++;
		return item;

		//How it works
		//10
		//20
		//30
		//front this.items[0] = 10
		//delete this.items[0] = 10 
		//this.front = 1
		//return this.items[0] = 10
	}


	isEmpty() {
		return this.rear - this.front === 0
	}

	peek() {

		return !this.isEmpty() ? this.items[this.front] : false;

	}

	size(){
		return this.rear - this.front;
	}

	print(){
		console.log(this.items);
	}

}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size())
queue.print();
console.log(queue.dequeue())
console.log(queue.peek())
queue.print()


