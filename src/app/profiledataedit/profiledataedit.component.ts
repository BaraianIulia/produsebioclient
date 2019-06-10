import {Component, OnInit} from '@angular/core';
import {Card} from '../models/card.model';
import {RegisterData} from '../models/registerData.model';
import {UserService} from '../serviceUser/user.service';

@Component({
  selector: 'app-profiledataedit',
  templateUrl: './profiledataedit.component.html',
  styleUrls: ['./profiledataedit.component.css']
})
export class ProfiledataeditComponent implements OnInit {
  private reader: FileReader;
  private fileToUpload: string | ArrayBuffer;
  private imgURL: string | ArrayBuffer;
  private descriere: string;

  handleFileInput(e) {
    this.reader = new FileReader();
    this.reader.readAsDataURL(e.target.files[0]);
    this.reader.onload = () => {
      this.imgURL = this.reader.result;
      this.fileToUpload = this.reader.result;
      console.log(this.fileToUpload);
    };
  }
  changeDescriere(descriere: string) {
    this.descriere = descriere;
  }

  constructor(private userservice: UserService) {
  }

  ngOnInit() {
  }

  editData(prenume, parolaveche, parola, repetaparola, telefon,
           adresa) {

    this.userservice.editData(prenume, parolaveche, parola, repetaparola, telefon, adresa,  this.fileToUpload, this.descriere);


  }

}
