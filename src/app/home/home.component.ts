import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduseService} from '../serviceProduse/produse.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagesUrl: any;

  constructor(private produseService: ProduseService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    console.log('iau img');
    this.produseService.getListaImagini();
    console.log('imaginile mele');
    console.log(this.imagesUrl);


  }

  seeDetails(idprodus: number) {
    location.href = '/product/' + idprodus;
  }
}
