export class Adresse{

  constructor(mentionsComplementaires,numeroVoie,numeroComplementaire,rue,codePostal,ville){

      this.mentionsComplementaires=mentionsComplementaires;
      this.numeroVoie=numeroVoie;
      this.numeroComplementaire=numeroComplementaire;
      this.rue=rue;
      this.codePostal=codePostal;
      this.ville=ville;
  }

  static fromSansMentions(numero,numeroComplementaire,rue,codePostal,ville){
    return new Adresse(null,numero,numeroComplementaire,rue,codePostal,ville);
  }

  afficher(){
    if(this.mentionsComplementaires){
      console.log(this.mentionsComplementaires);
      console.log(
        `${this.numeroVoie}${this.numeroComplementaire ?? ""}${this.rue}\n${String(this.codePostal).padStart(5, "0")}${this.ville.toUpperCase()}`
    )
    }
  }
}