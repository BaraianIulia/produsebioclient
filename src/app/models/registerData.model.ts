import {Card} from './card.model';

export class RegisterData {
  nume: string;
  prenume: string;
  datanasterii: Date;
  mail: string;
  telefon: string;
  adresa: string;
  puncte: number;
  fileToUpload: string;
  card: Card;
  codiban: string;
  descriere: string;
  parola: string;


  constructor(nume: string, prenume: string, datanasterii: Date, mail: string, telefon: string,
              adresa: string, puncte: number, fileToUpload: string, card: Card,
              codiban: string, descriere: string, parola: string) {
    this.nume = nume;
    this.prenume = prenume;
    this.datanasterii = datanasterii;
    this.mail = mail;
    this.telefon = telefon;
    this.adresa = adresa;
    this.puncte = puncte;
    this.fileToUpload = fileToUpload;
    this.card = card;
    this.codiban = codiban;
    this.descriere = descriere;
    this.parola = parola;
  }
}
