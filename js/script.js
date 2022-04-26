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
console.log(cellNum);   

const bombs = 16;
const bombArray = [];

for (let i = 0; i < bombs; i++) {
    let bombGenerator = Math.floor(Math.random() * cellNum);
    console.log(bombGenerator);
    if(bombGenerator[i] === bombArray[i]){
    }
    else {
        bombArray.push(bombGenerator);
    }
}
console.log(bombArray);


const box = document.querySelector(".box");
console.log(box);

for (let i = 0; i < cells; i++) {
    const item = document.createElement("div");
    console.log(item);

    item.innerHTML = `<span>${cellNum[i]}</span>`    
    
    item.classList.add("cell");

    box.append(item);

    item.addEventListener("click", function(){
        let clickAbomb;
        if (bombArray[i] !== cellNum[i]) {
            item.classList.add("azzurre")
        } else {
            item.classList.add("red");
        }
        console.log(clickAbomb)
    });
}
