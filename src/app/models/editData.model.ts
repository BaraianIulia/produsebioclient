import {Card} from './card.model';

export class EditData {

  prenume: string;
  mail: string;
  telefon: string;
  adresa: string;
  fileToUpload: string;
  parolaNoua: string;
  parolaVeche: string;
  descriere: string;

  constructor(prenume: string, mail: string, telefon: string, adresa: string, fileToUpload: string,
              parolaNoua: string, parolaVeche: string, descriere:string) {
    this.prenume = prenume;
    this.mail = mail;
    this.telefon = telefon;
    this.adresa = adresa;
    this.fileToUpload = fileToUpload;
    this.parolaNoua = parolaNoua;
    this.parolaVeche = parolaVeche;
    this.descriere = descriere;
  }
}
