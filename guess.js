
const guess = (userGuess, secret) => {
    if (userGuess < secret)
	return "Too small!";
    else if (userGuess > secret)
	return "Too big!";
    else
	return "You win";
}

// console.log(guess(50, 14));   --> Too big!
// console.log(guess(27, 78));   --> Too small!
// console.log(guess(32, 32));   --> You win
// console.log(guess(89, 98));   --> Too small!

