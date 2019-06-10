export class Produse {

  idprodus: number;
  mail: string;
  stoc: number;
  zona: string;
  categorie: string;
  dataProducere: Date;
  pret: number;
  termenValabilitate: number;
  nume: string;
  descriere: string;
  unitateDeMasura: string;
  valoareMasura: number;
  poza: string;


  constructor(idprodus: number, mail: string, stoc: number, zona: string, categorie: string, dataProducere: Date, pret: number,
              termenValabilitate: number, nume: string, descriere: string, unitateDeMasura: string, valoareMasura: number, poza: string) {
    this.idprodus = idprodus;
    this.mail = mail;
    this.stoc = stoc;
    this.zona = zona;
    this.categorie = categorie;
    this.dataProducere = dataProducere;
    this.pret = pret;
    this.termenValabilitate = termenValabilitate;
    this.nume = nume;
    this.descriere = descriere;
    this.unitateDeMasura = unitateDeMasura;
    this.valoareMasura = valoareMasura;
    this.poza = poza;
  }
}
