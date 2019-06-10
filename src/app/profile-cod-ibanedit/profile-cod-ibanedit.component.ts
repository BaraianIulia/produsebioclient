import { Component, OnInit } from '@angular/core';
import {UserService} from '../serviceUser/user.service';

@Component({
  selector: 'app-profile-cod-ibanedit',
  templateUrl: './profile-cod-ibanedit.component.html',
  styleUrls: ['./profile-cod-ibanedit.component.css']
})
export class ProfileCodIbaneditComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  editCodIBAN(codIBAN: string) {
    this.userservice.editCodIBAN(codIBAN);
  }
}
