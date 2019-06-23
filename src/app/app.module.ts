import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TooltipModule} from 'ng2-tooltip-directive';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {SlideshowModule} from 'ng-simple-slideshow';
import {SelectDropDownModule} from 'ngx-select-dropdown';

import {RatingModule} from 'ng2-rating';
import {BarRatingModule} from 'ngx-bar-rating';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AlertModule} from 'ngx-bootstrap';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserService} from './serviceUser/user.service';

import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactComponent} from './contact/contact.component';
import {ProducerComponent} from './producer/producer.component';
import {CartComponent} from './cart/cart.component';
import {AlertService} from './alertService/alert.service';
import {AlertComponent} from './alert-component/alert-component.component';
import {ProduseService} from './serviceProduse/produse.service';
import {ProfiledataeditComponent} from './profiledataedit/profiledataedit.component';
import {ProfilecardeditComponent} from './profilecardedit/profilecardedit.component';
import {ProfileCodIbaneditComponent} from './profile-cod-ibanedit/profile-cod-ibanedit.component';
import {ViewCardComponent} from './view-card/view-card.component';
import {ViewCodibanComponent} from './view-codiban/view-codiban.component';
import {ShowProductsComponent} from './show-products/show-products.component';
import {AddProductComponent} from './add-product/add-product.component';
import {ShowProductDetailsComponent} from './show-product-details/show-product-details.component';
import {AddRecipeComponent} from './add-recipe/add-recipe.component';
import {ShowRecipeComponent} from './show-recipe/show-recipe.component';
import {ShowRecipeDetailsComponent} from './show-recipe-details/show-recipe-details.component';
import { StarRatingModule } from 'angular-star-rating';
import {SliderModule} from 'angular-image-slider';
import {AddDiscountComponent} from './add-discount/add-discount.component';
import {ShowMyProductsComponent} from './show-my-products/show-my-products.component';
import {RatingComponent} from './rating/rating.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SurveyComponent } from './survey/survey.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { OpiniiProdusComponent } from './opinii-produs/opinii-produs.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    ProducerComponent,
    CartComponent,
    AlertComponent,
    ProfiledataeditComponent,
    ProfilecardeditComponent,
    ProfileCodIbaneditComponent,
    ViewCardComponent,
    ViewCodibanComponent,
    ShowProductsComponent,
    AddProductComponent,
    ShowProductDetailsComponent,
    AddRecipeComponent,
    ShowRecipeComponent,
    ShowRecipeDetailsComponent,
    AddDiscountComponent,
    ShowMyProductsComponent,
    RatingComponent,
    AdminLoginComponent,
    SurveyComponent,
    OpiniiProdusComponent,


  ],
  imports: [
    TooltipModule,
    BrowserModule,
    AppRoutingModule,
    ShowHidePasswordModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    NgbAlertModule,
    AlertModule,
    DatePickerModule,
    NgxPaginationModule,
    RatingModule,
    SliderModule,
    SlideshowModule,
    SelectDropDownModule,
    BarRatingModule,
    StarRatingModule,
    Ng2CarouselamosModule

  ],
  providers: [UserService, AlertService, ProduseService],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor() {
  }


}
