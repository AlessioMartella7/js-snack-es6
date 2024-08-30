/* *SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console */

// creo un array di squadre di calcio

const names = ['Giuventus','Torrino','Rioma', 'Lazie', 'Internos','Mailan']

// creo una array con dentro i solo i nomi e le altre prop da compilare

const teamData = names.map(name => {
    const team ={
        name,
        points: 0,
        fouls: 0,
    }
    return team
})
console.log(teamData)