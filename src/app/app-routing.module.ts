import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  {
    path: 'product',
    children: [
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      { path: ':id', component: ProductDetailsComponent },
    ]
  }
];

// const routes: Routes = [
//   { path: '', redirectTo: '/products', pathMatch: 'full' },
//   { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
