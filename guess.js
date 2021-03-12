
const guess = (userGuess, secret) => {
    if (userGuess < secret)
	console.log("Too small!");
    else if (userGuess > secret)
	console.log("Too big!");
    else
	console.log("You win");
}

// guess(50, 14)//;   --> Too big!
// guess(27, 78)//;   --> Too small!
// guess(32, 32)//;   --> You win
// guess(89, 98)//;   --> Too small!

