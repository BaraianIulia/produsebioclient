import {Component, OnInit} from '@angular/core';
import {ProduseService} from '../serviceProduse/produse.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

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
    this.produseService.getAllProducts();
  }

  pageChange(newPage: number) {
    this.router.navigate([''], {queryParams: {page: newPage}});
  }

  seeDetails(idprodus: number) {
    location.href = '/product/' + idprodus;
  }
}
