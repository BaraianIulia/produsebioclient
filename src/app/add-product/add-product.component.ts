import {Component, OnInit} from '@angular/core';
import {RegisterData} from '../models/registerData.model';
import {Card} from '../models/card.model';
import {ProduseService} from '../serviceProduse/produse.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private functie: string;
  fileToUpload;
  private formData: FormData;
  private reader: FileReader;
  private imgURL: string | ArrayBuffer;
  private category = 'legume';
  private measureunit = 'kg';

  public minDate: Date = new Date('01/01/1950');
  public maxDate: Date = new Date(Date.now());
  public value: Date = new Date('05/16/2017');
  private dataproducere: Date;

  constructor(private serviceproduct: ProduseService) {
  }

  ngOnInit() {
  }


  handleFileInput(e) {
    /*  const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.fileToUpload = reader.result;
        }
        console.log(this.fileToUpload);
      };*/
    this.formData = new FormData();
    this.formData.append('fileToUpload', e.target.files[0]);
    this.reader = new FileReader();
    this.reader.readAsDataURL(e.target.files[0]);
    this.reader.onload = () => {
      this.imgURL = this.reader.result;
      this.fileToUpload = this.reader.result;
      console.log('poza incarcata');
      console.log(this.fileToUpload);
    };
  }

  changeCategory(value: string) {
    this.category = value;
  }

  changeMU(value: string) {
    this.measureunit = value;
  }

  changeDataProducere(date) {
    this.dataproducere = new Date(date);

  }

  addProduct(nume: string, descriere: string, cantitate: number, pret: number,
             termenvalabilitate: number, zona: string, valoaremasura: number) {
    console.log(this.category);
    this.serviceproduct.addProduct(nume, descriere, cantitate, pret, termenvalabilitate, zona,
      this.fileToUpload, this.category, this.measureunit, this.dataproducere, valoaremasura);
  }
}
