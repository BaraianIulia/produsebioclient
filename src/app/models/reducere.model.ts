export class Reducere {

  idreducere: number;
  produse: any;
  procent: number;
  dataStart: Date;
  dataFinal: Date;


  constructor(idreducere: number, produse: any, procent: number, dataStart: Date, dataFinal: Date) {
    this.idreducere = idreducere;
    this.produse = produse;
    this.procent = procent;
    this.dataStart = dataStart;
    this.dataFinal = dataFinal;
  }
}
