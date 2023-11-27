/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
//* In JavaScript, ci sono tanti tipi di dati diversi, e ognuno di essi è come una scatola magica che può contenere cose diverse.*/

//* Stringa (String): È come una collana di lettere che forma una parola. Ad esempio, "ciao" è come una collana con le lettere c-i-a-o.*/

//* Numero (Number): Sono come i tuoi numeri giocattolo con cui conti i tuoi giocattoli. Puoi avere un numero intero come 5 o un numero con i puntini come 3.14. */

//* Booleano (Boolean): È come una luce magica che può essere accesa (vero) o spenta (falso). Se la luce è accesa, è come dire "sì", se è spenta è come dire "no".*/

//* Null: È come quando non hai nulla, nemmeno un giocattolo in mano. È come dire "niente qui".*/

//*Undefined: È come quando stai cercando un giocattolo, ma non l'hai ancora trovato. È come dire "ancora non so".*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Gioele";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let uno = 12;
let due = 20;
console.log(uno + due);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
const name = "Friggia";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let quatro = 4 - x;
console.log(quatro - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);
