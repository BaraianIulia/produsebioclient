export class Card {
  numar: string;
  dataexpirare: string;
  cvvcod: string;

  constructor(numar: string, dataexpirare: any, cvvcod: any) {
    this.numar = numar;
    this.dataexpirare = dataexpirare;
    this.cvvcod = cvvcod;
  }
}
