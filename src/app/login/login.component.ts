import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../serviceUser/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userservice: UserService) {
  }


  ngOnInit() {
  }

  login(mail, parola, functie) {
    this.userservice.login(mail, parola, functie);

  }


  redirectToRegisterPage() {
    location.href = '/register';
  }

}
