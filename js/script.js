// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


const cells = 100;
const cellNum = [];
for (let i = 0; i < 100; i++) {
    cellNum[i] = i + 1;
}   

const bombs = 16;
const bombArray = [];
console.log(bombArray);

while(bombArray.length < 16) {
    let newBomb = Math.floor(Math.random() * cells);

    if (bombArray.includes(newBomb) === false) {
        bombArray.push(newBomb);
    }
}

const box = document.querySelector(".box");

for (let i = 0; i < cells; i++) {
    const item = document.createElement("div");

    item.innerHTML = `<span>${cellNum[i]}</span>`    
    
    item.classList.add("cell");

    box.append(item);
    
    item.addEventListener("click", function(){
        const num = parseInt(this.innerText);
        if (bombArray.includes(num) === false) {
            this.classList.add("azzurre");
            this.style.pointerEvents = "none";
        } else {
            this.classList.add("red");
            box.style.pointerEvents = "none";
            const score = document.querySelector(".score")
            score.innerHTML = `<h1>Hai ottenuto il punteggio di: ${box.getElementsByClassName("azzurre").length}</h1><p>Ricarica la pagina per una nuova partita</p>`
        }
    });
}