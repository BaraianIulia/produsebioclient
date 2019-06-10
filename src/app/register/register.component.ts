import {Component, OnInit} from '@angular/core';
import {UserService} from '../serviceUser/user.service';
import {Client} from '../models/client.model';
import {RegisterData} from '../models/registerData.model';
import {Card} from '../models/card.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  public minDate: Date = new Date('01/01/1950');
  public maxDate: Date = new Date(Date.now());
  public value: Date = new Date('05/16/2017');
  private datanasterii: any = new Date();
  private functie = 'client';
  private numarcard: string;
  private dataexpirare: string;
  private cvvcod: string;
  private codIBAN: string;
  private descriere: string;
  private imgURL: string | ArrayBuffer;

  constructor(public userservice: UserService) {

  }

  fileToUpload;
  registerData: RegisterData;
  card: Card;
  private formData: FormData;
  private reader: FileReader;

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

  ngOnInit() {
  }

  register(nume, prenume, mail, parola, repetaparola, telefon,
           adresa) {

    console.log(this.functie);
    this.card = new Card(this.numarcard, this.dataexpirare, this.cvvcod);
    this.registerData = new RegisterData(nume, prenume, this.datanasterii, mail, telefon, adresa, 0,
      this.fileToUpload, this.card, this.codIBAN, this.descriere, parola);
    this.userservice.register(this.registerData, this.functie, repetaparola);


  }

  changeType(functie: string) {
    this.functie = functie;

  }

  changeDataNasterii(date) {
    this.datanasterii = new Date(date);
    console.log(this.datanasterii);
  }

  changeNumar(numarcard: string) {
    this.numarcard = numarcard;

  }

  changeDataExpirare(dataexpirare: string) {
    this.dataexpirare = dataexpirare;

  }

  changeCvvcod(cvvcod: string) {
    this.cvvcod = cvvcod;
  }

  changeCodIBAN(codIBAN: string) {
    this.codIBAN = codIBAN;
  }

  changeDescriere(descriere: string) {
    this.descriere = descriere;
  }
}
