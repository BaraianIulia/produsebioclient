export class Client {
  nume: string;
  prenume: string;
  datanasterii: Date;
  mail: string;
  telefon: string;
  adresa: string;
  puncte: number;
  fileToUpload: any;
  idcard: number;

  constructor(nume: string, prenume: string, datanasterii: Date, mail: string,
              telefon: string, adresa: string, fileToUpload: any, puncte: number, idcard: number) {
    this.nume = nume;
    this.prenume = prenume;
    this.datanasterii = datanasterii;
    this.mail = mail;
    this.telefon = telefon;
    this.adresa = adresa;
    this.fileToUpload = fileToUpload;
    this.puncte = puncte;
    this.idcard = idcard;

  }


}
