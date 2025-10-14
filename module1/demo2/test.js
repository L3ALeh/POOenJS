import {Client} from "./Client.js";
import {Voiture} from "./Voiture.js";


//gestion import Settings -> Editor -> Code style -> Js -> Imports -> Always

let client  = new Client();
let voiture = new Voiture();

client.nom="Italiano";
client.prenom="Mario";
client.adresse="Rue des Champis";
client.noPermis="123456789";
client.dateNaissance= new Date("1999-01-01");
client.noclient = 12345;


console.log(client.afficherDonneesClient())


voiture.vitesse= 0;
voiture.immat= "1AE7158A";
voiture.dateMiseEnCirculation= new Date();
voiture.vitesseMax=50;
voiture.energie="Diesel";

console.log(voiture.afficherDonneesvoiture());
voiture.demarrer();
voiture.accelerer();
voiture.demarrer();
