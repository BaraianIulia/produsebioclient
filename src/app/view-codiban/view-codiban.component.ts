import { Component, OnInit } from '@angular/core';
import {UserService} from '../serviceUser/user.service';

@Component({
  selector: 'app-view-codiban',
  templateUrl: './view-codiban.component.html',
  styleUrls: ['./view-codiban.component.css']
})
export class ViewCodibanComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.viewCodIBAN();
  }

}
