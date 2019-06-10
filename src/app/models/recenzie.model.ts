export class Recenzie {

  idrecenzie: number;
  idprodus: number;
  textrecenzie: string;
  vot: number;
  datarecenzie: Date;
  autor: string;


  constructor(idrecenzie: number, idprodus: number, textrecenzie: string, vot: number, datarecenzie: Date, autor: string) {
    this.idrecenzie = idrecenzie;
    this.idprodus = idprodus;
    this.textrecenzie = textrecenzie;
    this.vot = vot;
    this.datarecenzie = datarecenzie;
    this.autor = autor;
  }
}
