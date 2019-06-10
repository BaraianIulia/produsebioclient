import {Component, OnInit} from '@angular/core';
import {UserService} from '../serviceUser/user.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {


  constructor(private userservice: UserService) {
  }

  ngOnInit() {
    console.log('iau date card');
    this.userservice.getCard();

  }

}
