import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../serviceProduse/produse.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-show-my-products',
  templateUrl: './show-my-products.component.html',
  styleUrls: ['./show-my-products.component.css']
})
export class ShowMyProductsComponent implements OnInit {
  config: any;

  constructor(public produseService: ProduseService, private route: ActivatedRoute,
              private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10
    };

    this.route.queryParamMap.pipe(map(params => params.get('page')))
      .subscribe(page => this.config.currentPage = page);
  }

  ngOnInit() {
    this.produseService.getAllMyProducts();
  }

  pageChange(newPage: number) {
    this.router.navigate([''], {queryParams: {page: newPage}});
  }

  seeDetails(idprodus: number) {
    location.href = '/products/discount/' + idprodus;
  }

}
