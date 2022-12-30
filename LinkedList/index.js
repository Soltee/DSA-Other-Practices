//===== LInked List ===//
// Ordered List
// Has a head
// Nodes
// NOdes, elements linked together using pointers
// First Node is called head 
// Last NODe is called tail, has pointer to null
// Each Node has data + reference/pointer to another node
// 

const n1 = {
	data : 100
}

const n2 = {
	data : 200
}

n1.next = n2

// console.log(n1, '\n');

class Node {
	constructor(data, next = null) 
	{
		this.data = data
		this.next = next
	}
}

class LinkedList {

	constructor() 
	{
		this.head  = null
		this.size  = 0;
	}

	// insert first node
	insertFirst(data){
		this.head = new Node(data, this.head)
		this.size++
	}

	// insert last node
	insertLast(data){
		const node = new Node(data, null);

		if(!this.head){

			this.head = node

		} else {

			let current = this.head

			while(current.next){
				current = current.next
			}

			current.next = node
			this.size++
		}
		

	}

	// insert at node
	insertAt(data, index){

		// Out of range
		if(index > 0 && index > this.size) return 

		if(index === 0) {
			this.insertFirst(data)
			return;
		}

		const node = new Node(data, null);
		let current, previous;

		current    = this.head // first is 0
		let count  = 0;

		while(count < index){ // 
			previous = current
			count++
			current  = current.next
		}

		node.next = current
		previous.next = node
	}


	// Get at node
	getAt(index){

		let current, previous;

		current    = this.head // first is 0
		let count  = 0;

		while(count <= index){

			if(count === index){
				this.log('Mine --')
				this.log(current?.data != undefined ? current?.data : "Unknown")
				return
			}

			count++
			current  = current.next
		}
		
		while(current){

			if(count === index){
				this.log('Instructor --')
				this.log(current.data)

			}

			count++
			current  = current.next

		}

		


	}


	// Remove at index
	removeAt(index){
		if(index < 0 || index > this.size) return

		let current, previous;

		current    = this.head // first is 0
		let count  = 0;

		if(index === 0){

			this.head = current.next

		} else {

			while(count < index){
				console.log(current.data, current.next.data, '----')
				count++
				previous = current
				current  = current.next
				console.log(current.data, current.next.data, '--')

			}

			/// Runs after - when count is >= to index
			// console.log("current.next ", current.next)
			previous.next = current.next


		}

		this.size--;
	}


	// Clear list
	clear(){

		this.head = null
		this.size = 0
	}
	// Print List data
	printList(){
		let current = this.head

		while(current){
			this.log(current.data);
			current = current.next
		}
	
	}

	log(data) {
		console.log(data)
	}

}

const node1 = new LinkedList()
node1.insertFirst(100)
node1.insertFirst(200)
node1.insertFirst(300)
node1.insertLast(400)
node1.insertAt(350, 0)
node1.insertAt(250, 2)

node1.printList()

node1.log('\n')

node1.log("===  Get the value at index")
node1.getAt(5) // 400
node1.getAt(6)// Unknown
node1.getAt(2) // 100

node1.log('\n')

node1.log("=== Remove at index")
node1.removeAt(2) // 250 is remove
node1.log("=== after Remove ")
node1.printList()

node1.log("=== Clear")
node1.clear() 
node1.printList()

