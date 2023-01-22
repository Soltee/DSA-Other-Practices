// HashTable
// A data structure to store a key value data
// Uses for constant lookup and retrival of a data
// 
// Examples
// - Database Indexing
// - Cache
// 

class HashTable {

	constructor(size){
		this.table = new Array(size);
		this.size  = size;
	}

	hash(key){

		let total = 0;

		for(let i = 0; i < key.length; i++){
			total += key.charCodeAt(i);
		}

		return total % this.size;

	}

	set(key, value){

		const index  = this.hash(key);

		this.table[index] = value;

	}

	get(key){

		const index = this.hash(key)

		return this.table[index];

	}

	remove(key) {

		const index = this.hash(key)

		this.table[index] = undefined;

	}

	display(){

		for(let i = 0; i < this.table.length; i++){

			if(this.table[i]) console.log(this.table[i], "\n")

		}

	}

}

const table = new HashTable(50);
table.set("name", 'Hari')
table.set("age", [1,2,3,4])
// table.display()

// console.log(table.get("age"), "\n")
// table.remove("age")
// table.display()

