import {Produse} from './produse.model';

export class CartProduct {
  produs: Produse;
  nrBucati: number;


  constructor(produs: Produse, nrBucati: number) {
    this.produs = produs;
    this.nrBucati = nrBucati;
  }
}
