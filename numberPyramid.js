
const numberPyramid = (base) => {
    for (let i = 0; i <= base; i++){
	console.log(i.toString().repeat(i));
    }
}


numberPyramid(8);
numberPyramid(5);
