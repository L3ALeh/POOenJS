export class Client {

  #noClient;
  #noPermis;
  #voitures;

  //attribut de classe
  static nbClientCrees = 0;
  //constante de classe
  static EST_CLIENT = true

  constructor(noClient, nom, prenom, adresse, dateNaissance, noPermis = "XXXXXXXXXXX") {
    //code appelé lors de l'instanciation
    console.log("L'instance de client est crée")

    this.#noClient = noClient;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.dateNaissance = dateNaissance;
    this.#noPermis = noPermis;
    this.#voitures = []

    Client.ajouterClient()
  }

// Méthodes de classe
  static afficherNbClients() {
    return `Nombre total de clients : ${Client.nbClientCrees}`
  }

  static ajouterClient() {
    Client.nbClientCrees++;
  }

  static retirerClient() {
    Client.nbClientCrees--;
  }


  afficherDonnesClient() {

    return `
            Numéro de client : ${this.noClient},
            nom : ${this.nom},
            prenom : ${this.prenom},
            adresse : ${this.adresse},
            date de naissance : ${this.dateNaissance ? this.dateNaissance.toLocaleDateString() : "<inconnu>"},
            numéro de permis : ${this.noPermis}, \n
            voitures : ${this.#voitures.map(v => v.afficherDetailVoiture()).join('\n')}                       
        `
  }

  getNoClient() {
    return this.#noClient;
  }

  setNoClient(value) {
    this.#noClient = value;
  }

  getNoPermis() {
    return this.#noPermis;
  }

  setNoPermis(value) {
    this.#noPermis = value;
  }

  ajouterVoiture(voiture) {
    if (!this.#voitures.includes(voiture)) {
      this.#voitures.push(voiture);
      voiture.setProprietaire(this); // met à jour la voiture
    }
  }

}