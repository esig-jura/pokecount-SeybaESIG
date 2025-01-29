"use strict"

/**
 * Fichier de script pour la page index.html
 * @author Seyba Tandia
 * @version 1.0
 * @since 2025-01-29
 */

// alert("Hello world!");

document.querySelector("h2").textContent = 20;

document.getElementById("compteur-el").textContent = 100;

let compteur = 0;
const compteurEl = document.getElementById("compteur-el");


function capturer() {
    compteur += 1; // Incrémenter le compteur de 1
    compteurEl.textContent = compteur; // Mettre à jour le texte de l'élément <h2>
    if (compteur < 5) {
        compteurEl.style.color = "green"; // Couleur verte pour moins de 5 captures
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow"; // Couleur jaune pour 5 à 9 captures
    } else {
        compteurEl.style.color = "red"; // Couleur rouge pour 10 captures ou plus
    }
}


const sauvegardeEl = document.getElementById("sauvegarde-el");

function sauvegarder() {
    let compteurStr = compteur + " Pokémons - ";
    sauvegardeEl.textContent += compteurStr; // Ajouter la valeur actuelle du compteur
    localStorage.setItem("captures", sauvegardeEl.textContent); // Sauvegarder les captures dans le localStorage
    compteur = 0;
    compteurEl.textContent = compteur;
}



const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");

capturerBtn.addEventListener("click", capturer);
sauvegarderBtn.addEventListener("click", sauvegarder);

window.addEventListener("load", () => { // Attendre que la page soit chargée pour exécuter le code
    sauvegardeEl.textContent = localStorage.getItem("captures") || ""; // Charger les captures sauvegardées ou une chaîne vide
});
