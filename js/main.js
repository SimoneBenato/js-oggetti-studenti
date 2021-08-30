// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let studente = {
    nome: 'Simone',
    cognome: 'Benato',
    eta: 23,
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for ( let key in studente) {
    console.log(key + ' : ' + studente[key])
}

// Creare un array di oggetti di studenti.
let studenti = [
    {
        nome: 'Simone',
        cognome: 'Benato',
        eta: 23, 
    },
    {
        nome: 'Federico',
        cognome: 'Benato',
        eta: 21, 
    },
    {
        nome: 'Samuele',
        cognome: 'Benato',
        eta: 19, 
    },
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (let i = 0; i < studenti.length; i++) {
    console.log(studenti[i]['nome'])
    console.log(studenti[i].cognome)
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
let userName = prompt('Inserisci il nome');
let userSurname = prompt('Inserisci il nome');
let userAge = parseInt(prompt('Inserisci il nome'));

let user = {
    nome: userName,
    cognome: userSurname,
    eta: userAge,
}

studenti.push(user);