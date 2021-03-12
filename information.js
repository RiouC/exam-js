
const information = (firstName, name, age) => {
    console.log(`prenom: ${firstName}`);
    console.log(`nom: ${name}`);
    console.log(`prenom: ${age}`);
    let tmp = age - 18;
    if (tmp >= 0)
	console.log(`Vous etes majeur depuis ${tmp} ans`);
    else
	console.log(`Vous serez majeur dans ${-tmp} ans`);
}

information('Sofiane', 'Akermoun', 39);
information('Alice', 'Liddell', 7);
