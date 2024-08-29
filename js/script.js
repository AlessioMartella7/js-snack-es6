/* 
*SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.

 */

//creo un array con dentro gli oggetti e le rispettive chiavi

const guestList = [
    {
        tableName: 'Holywood Stars',
        guestName: 'Brad Pitt',
        place: '1'
    },
    {
        tableName: 'Holywood Stars',
        guestName: 'Johnny Depp',
        place: '2'
    },
    {
        tableName: 'Holywood Stars',
        guestName: 'Lady Gaga',
        place: '3'
    },
    {
        tableName: 'Ronaldos',
        guestName: 'Cristiano Ronaldo',
        place: '4'
    },
    {
        tableName: 'Ronaldos',
        guestName: 'Georgina Rodriguez',
        place: '5'
    },
    {
        tableName: 'Ferragnez',
        guestName: 'Chiara Ferragni',
        place: '6'
    },
    {
        tableName: 'Clooneys',
        guestName: 'George Clooney',
        place: '7'
    },
    {
        tableName: 'Clooneys',
        guestName: 'Amal Clooney',
        place: '8'
    },
    {
        tableName: 'Ferragnez',
        guestName: 'Fedez',
        place: '9'
    },
    {
        tableName: 'Tv Star',
        guestName: 'Amadeus',
        place: '10'
    },
    {
        tableName: 'Tv Star',
        guestName: 'Fiorello',
        place: '11'
    },

];

// stampo in console la lista invitati
guestList.forEach( guest => console.log(`
        Nome tavolo: ${guest.tableName}
        Nome dell'ospite: ${guest.guestName}
        Posto occupato: ${guest.place}
        `)
    );

