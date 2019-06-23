export class Recenzie {

  idrecenzie: number;
  idprodus: number;
  textRecenzie: string;
  vot: number;
  dataRecenzie: Date;
  autor: string;


  constructor(idrecenzie: number, idprodus: number, textrecenzie: string, vot: number, datarecenzie: Date, autor: string) {
    this.idrecenzie = idrecenzie;
    this.idprodus = idprodus;
    this.textRecenzie = textrecenzie;
    this.vot = vot;
    this.dataRecenzie = datarecenzie;
    this.autor = autor;
  }
}
