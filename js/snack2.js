/* *SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84 */

// Creo un array con la lista studenti

const newClassStudents = [
    {
        name: 'Marco della Rovere' ,
        id : 213,
        Grades: 78,
    },
    {
        name: 'Paola Cortellessa' ,
        id : 110,
        Grades: 96,
    },
    {
        name: 'Andrea Mantegna' ,
        id : 250,
        Grades: 48,
    },
    {
        name: 'Gaia Borromini' ,
        id : 145,
        Grades: 74,
    },
    {
        name: 'Luigi Grimaldello' ,
        id : 196,
        Grades: 68,
    },
    {
        name: 'Piero della Francesca' ,
        id : 102,
        Grades: 50,
    },
    {
        name: 'Francesca da Polenta' ,
        id : 120,
        Grades: 84,
    },
]

// Creo un nuovo array con tutti i nomi maiuscoli

const upperName = newClassStudents.map( student => student.name.toUpperCase());
console.log(`
    Elenco Studenti nuovo corso:
    ${upperName}
    `);

// Creo una lista di tutti gli studenti che hanno un totale di voti superiore a 70

const over70Grades = newClassStudents.filter( student => student.Grades > 70);
console.log(over70Grades);
