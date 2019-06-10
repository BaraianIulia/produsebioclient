export class Recipe {
  idreteta: number;
  nume: string;
  poza: any;
  listaproduse: string;
  modpreparare: string;
  buget: number;
  timp: string;
  mail: string;


  constructor(idreteta: number, nume: string, poza: any, listaproduse: string, modpreparare: string, buget: number, timp: string, mail: string) {
    this.idreteta = idreteta;
    this.nume = nume;
    this.poza = poza;
    this.listaproduse = listaproduse;
    this.modpreparare = modpreparare;
    this.buget = buget;
    this.timp = timp;
    this.mail = mail;
  }
}
