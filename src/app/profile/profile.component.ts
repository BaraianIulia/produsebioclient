import {Component, OnInit} from '@angular/core';
import {UserService} from '../serviceUser/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private currentUser: any;
  private currentFunction: any;
  private imgURL: any;
  private reader: FileReader;


  constructor(private userservice: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentFunction = JSON.parse(localStorage.getItem('currentFunction'));
    console.log(this.currentUser);
  }

  ngOnInit() {
    // get from server
    console.log(this.currentUser.fileToUpload);
    this.imgURL = this.currentUser.poza;

  }

  redirectToEditDataProfile() {
    location.href = '/editprofile/' + this.currentUser.nume + this.currentUser.prenume;

  }

  redirectToEditCard() {
    location.href = '/editcard/' + this.currentUser.nume + this.currentUser.prenume;
  }

  redirectToEditCodIBAN() {
    location.href = '/editcodiban/' + this.currentUser.nume + this.currentUser.prenume;
  }


  redirectToViewCard() {
    location.href = '/viewcard/' + this.currentUser.nume + this.currentUser.prenume;
  }

  redirectToViewCodIBAN() {
    location.href = '/viewcodiban/' + this.currentUser.nume + this.currentUser.prenume;
  }
}
