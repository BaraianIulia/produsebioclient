import {Component, OnInit} from '@angular/core';
import {ProduseService} from '../serviceProduse/produse.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {UserService} from '../serviceUser/user.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  config: any;

  constructor(public userService: UserService, private route: ActivatedRoute,
              private router: Router, private  produseService: ProduseService) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10
    };

    this.route.queryParamMap.pipe(map(params => params.get('page')))
      .subscribe(page => this.config.currentPage = page);
  }

  ngOnInit() {
    this.userService.getAllProducers();
  }

  pageChange(newPage: number) {
    this.router.navigate([''], {queryParams: {page: newPage}});
  }

  redirectToShowProduseFurnizor(mail: any) {
    localStorage.setItem('currentProducerMail', JSON.stringify(mail));
    location.href = '/products/show/furnizor';
  }
}
