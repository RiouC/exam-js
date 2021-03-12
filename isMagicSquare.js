
// créer une ligne à partir d'une matrice flatten
const createRow = (flatten, size, nbRow) => {
    let arr = [];
    for (let i = 0; i < size; i++)
	arr.push(flatten[i*size + nbRow]);
    return arr;
}


// Uniquement pour matrice carré (ce qui est le cas pour un carré magique)
const transposeMatrix = (matrix) => {
    let size = matrix.length;
    let newMatrix = [];
    let flatten = matrix.flat();
    for (let i = 0; i < size; i++)
	newMatrix.push(createRow(flatten, size, i));
    return newMatrix;
}


const computeDiagonal = (matrix, reverse) => {
    let res = 0;

    if (!reverse) {
	for (let i = 0; i < matrix.length; i++)
	    res += matrix[i][i]
    } else if (reverse) {
	for (let i = matrix.length - 1; i >= 0; i--)
	    res += matrix[i][i]
    } else
	console.log("ERROR");

    return res;
}

const isMagicSquare = (matrix) => {
    // On vérifie que la matrice est carré
    let size = matrix.length;
    for (el of matrix)
	if (el.length !== size)
	    return false;

    // On calcule la somme des lignes
    rowArr = matrix.map(row => row.reduce((acc, curr) => acc + curr, 0));
    // on s'assure que leurs sommes sont identiques
    const rowValues = [...new Set(rowArr)];

    // on calcul la transposée de la matrice
    let transposed = transposeMatrix(matrix);

    // on fait comme avec les colonnes
    colArr = transposed.map(row => row.reduce((acc, curr) => acc + curr, 0));
    const colValues = [...new Set(colArr)];

    // on calcul les diagonales
    const diag1 = computeDiagonal(matrix, false);
    const diag2 = computeDiagonal(matrix, true);

    if (rowValues.length === 1 &&
	colValues.length === 1 &&
	rowValues[0] === colValues[0] &&
	colValues[0] === diag1 &&
	diag1 === diag2)
	return true;
    else
	return false;
}


const square = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
]

const square2 = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
]

const square3 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
]

const square4 = [
    [1, 2, 1],
    [1, 1, 1],
    [1, 1, 1],
]

const square5 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1, 4],
]

const square6 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]


console.log(isMagicSquare(square));
console.log(isMagicSquare(square2));
console.log(isMagicSquare(square3));
console.log(isMagicSquare(square4));
console.log(isMagicSquare(square5));
console.log(isMagicSquare(square6));
