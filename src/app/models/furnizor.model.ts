export class Furnizor {
  nume: string;
  prenume: string;
  datanasterii: Date;
  mail: string;
  telefon: string;
  adresa: string;
  codiban: string;
  descriere: string;
  puncte: number;
  fileToUpload: File;

  constructor(nume: string, prenume: string, datanasterii: Date, mail: string, telefon: string,
              adresa: string, codiban: string, descriere: string, puncte: number, fileToUpload: File) {
    this.nume = nume;
    this.prenume = prenume;
    this.datanasterii = datanasterii;
    this.mail = mail;
    this.telefon = telefon;
    this.adresa = adresa;
    this.codiban = codiban;
    this.descriere = descriere;
    this.puncte = puncte;
    this.fileToUpload = fileToUpload;
  }
}
