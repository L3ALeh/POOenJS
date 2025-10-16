export class Voiture{

  numeroSerie;
  immat;
  marque;
  modele;
  kilometrage;
  vitesse;
  vitesseMax;
  dateMiseEnCirculation;
  boiteDeVitesse;
  energie;
  categorie;


  afficherDonneesvoiture(){

    return`
      immatriculation: ${this.immat},
      Marque : ${this.marque},
      Modèle: ${this.modele},
      Kilométrage: ${this.kilometrage},
      Vitesse : ${this.vitesse},
      Vitesse Max : ${this.vitesseMax}
      Date de mise en circulation : ${this.dateMiseEnCirculation ? this.dateMiseEnCirculation.toLocaleDateString() : "<inconnu>"},
      Boîte de vitesse : ${this.boiteDeVitesse},
      Energie : ${this.energie},
      Catégorie : ${this.categorie}
    `
  }

demarrer(){
    if(this.vitesse === 0){
      console.log("Introduction de la clé")
      console.log("Tourner la clé")
      console.log("La voiture démarre");
    }else{
      console.log("La voiture roule déjà");
    }
}

accelerer(){
    if(this.vitesse > this.vitesseMax - 5){
      console.log("La voiture à atteint la vitesse maximale !")
    }else{
      this.vitesse += 5
      console.log("La voiture accélère, sa vitesse est de " + this.vitesse + " km/h")
    }

}


}