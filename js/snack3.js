/* *SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */


//creo una funzione per generare il peso delle biciclette 
const getRandomNumber = (min, max, totNumb) => {
    const numbers = [];
    while(numbers.length < totNumb) {
    const randomNumber = Math.floor(Math.random() * (max +1 -min)) + min;
    if (!numbers.includes(randomNumber)) 
    numbers.push(randomNumber);
    }
    return numbers
}

//creo un array con i nomi delle biciclette
const bikesNames = ['raptor','speedo','bolt','flash','fury']

//creo una costante per stabilire la lunghezza dell'array
const bikesNumber = bikesNames.length;

// genero il peso delle biciclette 
const weight = getRandomNumber(15, 25, bikesNumber);

//creo un array di oggetti per le biciclette ed il loro peso
const bikesList = bikesNames.map(name => ({ name, weight})) ;


console.log(bikesList)