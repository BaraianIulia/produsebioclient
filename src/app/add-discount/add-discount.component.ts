import {Component, OnInit} from '@angular/core';
import {ProduseService} from '../serviceProduse/produse.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent implements OnInit {
  private idproduct: any;
  public minDate: Date = new Date(Date.now());
  public maxDate: Date = new Date('01/01/2200');
  public value: Date = new Date(Date.now());
  private datastart: Date = new Date(Date.now());
  private datafinal: Date = new Date(Date.now());

  constructor(public produseService: ProduseService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  setDiscount(discount: string) {
    this.route.params.subscribe(params => {
      this.idproduct = params.id;
    });
    this.produseService.setDiscount(discount, this.idproduct, this.datastart, this.datafinal);

  }

  changeDataStart(date) {
    this.datastart = new Date(date);
    console.log(this.datastart);
  }

  changeDataFinal(date) {
    this.datafinal = new Date(date);
    console.log(this.datafinal);
  }
}
