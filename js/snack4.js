/* *SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console */

//creo una funzione per generare numeri random
const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max +1 -min)) + min);

// creo un array di squadre di calcio

const names = ['Giuventus','Torrino','Rioma', 'Lazie', 'Internos','Mailan']

// creo una array con dentro i solo i nomi e le altre prop da compilare

const teamData = names.map(name => ({name, punti: 0, falli: 0,}));
 
// aggiungiamo falli e punti al nostro array

teamData.forEach(team => {
    team.punti = getRandomNumber(3,90);
    team.falli = getRandomNumber (10,100);
})

console.log(teamData)


//Creiamo un nuovo array i cui elementi sono composti dai nomi e dai falli subiti

const teamFouls = teamData.map(team =>{
 const {name, falli} = team
 return {name, falli}

})
console.log(teamFouls)
