import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { GetAllProductsComponent } from './components/get-all-products/get-all-products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path:"product",component:CreateProductComponent},
  {path:"", component:GetAllProductsComponent},
  {path:"product/:id",component:UpdateProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
