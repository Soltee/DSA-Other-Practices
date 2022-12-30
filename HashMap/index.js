const log = (param) => {
	console.log(param);
}

//**** No duplicates/
const hashMap = new Map();
// key, value pair
// can modify key & value 
///eg. array's first index is always 0, but hasmap key can be anything
// ** Add to set
hashMap.set(10, 100) 
hashMap.set(11, true)
hashMap.set(11, "hello") // overrides true boolean value to 'hello' string
hashMap.set("apple", 3);

log(`Map key Values`);
log(hashMap)

//** Get value
log(`\n == Get individual value of a key`);
log(hashMap.get(11)); // hello not true boolean value
log(hashMap.get(78)); // Undefined

log(`\n == Get Keys`); // objects
log(hashMap.keys())

log(`\n == Get Values`); // objects
log(hashMap.values())

//** Get Size , size is property not a functon
log(`\n == Delete a key`);
hashMap.delete("apple")
log(hashMap.size) // 2

//** Get Size , size is property not a functon
log(`\n == Size of hashmap`);
log(hashMap.size) // 2

//** Can be loop like array
log(`\n == Loop key Values`);
hashMap?.forEach((key, value) => { // no map
	log(key)
	log(value)
})

log(`\n == Loop  using for of`);
for(i of hashMap){ // log [key, value], [key, value], [key, value]
	log(i);
}

//** claer all
log(`\n == Clear all`);
hashMap.clear()
log(hashMap)
