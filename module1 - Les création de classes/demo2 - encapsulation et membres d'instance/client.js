export class Client {

    #noclient;
    nom;
    prenom;
    adresse;
    dateNaissance;
    noPermis;

  afficherDonneesClient(){

    return`
      Numéro de client : ${this.#noclient},
      nom: ${this.nom},
      prenom : ${this.prenom},
      adresse: ${this.adresse},
      date de naissance: ${this.dateNaissance ? this.dateNaissance.toLocaleDateString() : "<inconnu>"},
      numéro Permis: ${this.noPermis},
    `
  }


  get noclient() {
    return this.#noclient;
  }

  set noclient(value) {
    this.#noclient = value;
  }
}