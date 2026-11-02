// type Produit = {
//     nom: string;
//     prix: number;
// };

// function ajouterLivraison(prix: number): number {
//     return prix + 2000;
// }

// const boubou: Produit = {
//     nom: "Boubou brodé",
//     prix: 25000
// };

// console.log(`${boubou.nom} livré : $ajouterLivraison("25000") F CFA`);



// let nom: string = "Boubou brodé";
// let prix: number = 25000;          
// let enStock: boolean = true;


// TypeScript : on type chaque paramètre, et ce que la fonction renvoie
// function prixTTC(prix: number, tauxTVA: number): number {
// return Math.round(prix * (1 + tauxTVA));
// }
// prixTTC(25000, 0.18);    
// // 29500
// prixTTC("25000", 0.18);  // erreur : "25000" n'est pas un number
// prixTTC(25000);          
// // erreur : il manque un argument




//tableau de taile

// *


// 

const bouton = document.querySelector("#ajouter");
if (!bouton) {
throw new Error("Bouton #ajouter introuvable : vérifiez l'id dans index.html");
}
bouton.addEventListener("click", ajouter);   
// OK : ici bouton existe forcément


export type Produit = { readonly id: number; nom: string; prix: number; stock: number };


