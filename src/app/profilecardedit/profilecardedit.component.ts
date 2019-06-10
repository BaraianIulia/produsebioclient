import {Component, OnInit} from '@angular/core';
import {UserService} from '../serviceUser/user.service';

@Component({
  selector: 'app-profilecardedit',
  templateUrl: './profilecardedit.component.html',
  styleUrls: ['./profilecardedit.component.css']
})
export class ProfilecardeditComponent implements OnInit {

  constructor(private userservice: UserService) {
  }

  ngOnInit() {
  }

  editCard(numar: string, dataexpirare: string, cvvcod: string) {
    this.userservice.editCard(numar, dataexpirare, cvvcod);
  }
}
