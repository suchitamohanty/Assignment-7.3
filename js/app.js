var counter_var = 0;

var counter = function() {
	return counter_var + 1;
}

counter_var = counter();
console.log(counter_var);
counter_var = counter();
console.log(counter_var);
counter_var = counter();
console.log(counter_var);
counter_var = counter();
console.log(counter_var);
counter_var = counter();
console.log(counter_var);