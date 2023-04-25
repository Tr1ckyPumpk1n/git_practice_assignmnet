function check_prime(num) {
	let factors = 0;
	
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			factors++;
		}
	}

	(factors == 2) ? console.log(num, "is prime") : console.log(num, "is not a prime");
}

check_prime(5);
check_prime(4);