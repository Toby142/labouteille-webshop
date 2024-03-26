import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ArtGalleryPageComponent } from './components/pages/art-gallery-page/art-gallery-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'category/:Category', component: CategoryPageComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'art-gallery', component: ArtGalleryPageComponent},
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
