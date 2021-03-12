// retournera true si l'année est bissextile ou bien false si elle ne l'est pas.

// - si l'année est divisible par 4 et non divisible par 100 ;
// - si l'année est divisible par 400 (« divisible » signifie que la division donne un nombre entier, sans reste).

const isLeapYear = (year) => {
    if (year % 400 === 0)
	return true;
    else if (year % 4 === 0 && year % 100 !== 0)
	return true;
    else
	return false;
}

console.log(isLeapYear(1997));
console.log(isLeapYear(2000));
console.log(isLeapYear(2012));
console.log(isLeapYear(2016));
console.log(isLeapYear(2020));
console.log(isLeapYear(2256));
console.log(isLeapYear(2257));
