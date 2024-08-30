/* *SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */


//creo una funzione per generare il peso delle biciclette 
const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max +1 -min)) + min);

//creo un array con i nomi delle biciclette
const bikesNames = ['raptor','speedo','bolt','flash','fury']

//creo una costante per stabilire la lunghezza dell'array
const bikesNumber = bikesNames.length;



//creo un array di oggetti per le biciclette ed il loro peso
const bikesList = bikesNames.map(name => {
    const bike = {
    name: name,
    weight: getRandomNumber(15,25),
    }
    return bike;
}) ;


console.log(bikesList

)



