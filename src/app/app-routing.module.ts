import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ProfileComponent} from './profile/profile.component';
import {ProducerComponent} from './producer/producer.component';
import {CartComponent} from './cart/cart.component';
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
import {AddDiscountComponent} from './add-discount/add-discount.component';
import {ShowMyProductsComponent} from './show-my-products/show-my-products.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'myprofile/:nume', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'producer', component: ProducerComponent},
  {path: 'mycart', component: CartComponent},
  {path: 'editprofile/:nume', component: ProfiledataeditComponent},
  {path: 'editcard/:nume', component: ProfilecardeditComponent},
  {path: 'editcodiban/:nume', component: ProfileCodIbaneditComponent},
  {path: 'viewcard/:nume', component: ViewCardComponent},
  {path: 'viewcodiban/:nume', component: ViewCodibanComponent},
  {path: 'products', component: ShowProductsComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'recipe/add', component: AddRecipeComponent},
  {path: 'product/:id', component: ShowProductDetailsComponent},
  {path: 'recipe', component: ShowRecipeComponent},
  {path: 'recipe/:id', component: ShowRecipeDetailsComponent},
  {path: 'products/discount', component: ShowMyProductsComponent},
  {path: 'products/discount/:id', component: AddDiscountComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

export const routingComponents = [LoginComponent, RegisterComponent];
