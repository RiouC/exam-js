const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = 0; i < tab.length; i++) {
    console.log(`${tab[i]}, length: ${tab[i].length}`);
}


for (let k of tab) {
    console.log(`${k}, length: ${k.length}`);
}


tab.forEach(elem => {
    console.log(`${elem}, length: ${elem.length}`);
});


let j = 0;
while (j < tab.length) {
    console.log(`${tab[j]}, length: ${tab[j].length}`);
    j++;
}


let k = 0;
do {
    console.log(`${tab[k]}, length: ${tab[k].length}`);
    k++;
} while (k < tab.length);
