"use strict"

/**
 * Fichier de script pour la page index.html
 * @author Seyba Tandia
 * @version 1.0
 * @since 2025-01-29
 */

// alert("Hello world!");

// document.querySelector("h2").textContent = 20;

// document.getElementById("compteur-el").textContent = 100;


let compteur = 0;
const compteurEl = document.getElementById("compteur-el");

// Tableau pour la sauvegarde des captures
let liste = []

// Texte qui affiche les captures sauvegardées
const sauvegardeEl = document.getElementById("sauvegarde-el");

// Boutons pour capturer, sauvegarder et réinitialiser
const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");
const resetBtn = document.getElementById("reset-btn");

// Ajouter un écouteur d'événement pour les boutons
capturerBtn.addEventListener("click", capturer);
sauvegarderBtn.addEventListener("click", sauvegarder);
resetBtn.addEventListener("click", reset);


/**
 * Fonction pour capturer un Pokémon
 * @returns {void}
 * @since 2025-01-29
 * @version 1.0
 * @see https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
 */
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



function sauvegarder() {
    let compteurStr = compteur + " Pokémons - ";
    compteur = 0;
    compteurEl.textContent = compteur;
    liste.push(compteurStr.substring(0, compteurStr.length - 3))

    console.log(liste);

    let string = JSON.stringify(liste)
    localStorage.setItem("key", string)
    afficherListe();
}



const listeEl = document.getElementById("listeOrdonnee");

window.addEventListener("load", () => { // Attendre que la page soit chargée pour exécuter le code
    if (localStorage.getItem("key") !== null) { // Si des captures sont sauvegardées
        let retString = localStorage.getItem("key")
        liste = JSON.parse(retString)
    }
    afficherListe();
});

/**
 * Fonction pour réinitialiser le compteur et la liste des captures
 * @returns {void}
 * @since 2025-01-29
 * @version 1.0
 */
function reset() {
    localStorage.removeItem("captures"); // Supprimer les captures sauvegardées
    localStorage.removeItem("key");
    liste = [];
    afficherListe();
}

/**
 * Fonction pour afficher la liste des captures
 * @returns {void}
 * @since 2025-01-29
 * @version 1.0
 */
function afficherListe() {
    listeEl.innerHTML = ""; // Réinitialiser la liste
    liste.forEach((element) => { // Pour chaque élément de la liste
        const li = document.createElement("li"); // Créer un élément <li>
        li.textContent = element; // Ajouter le texte de l'élément de la liste
        listeEl.appendChild(li); // Ajouter l'élément <li> à la liste <ol>
    });
}
