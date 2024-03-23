import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { CategoriesSectionComponent } from './components/shared/categories-section/categories-section.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { BigCategorySectionComponent } from './components/shared/big-category-section/big-category-section.component';
import { FillerSectionComponent } from './components/shared/filler-section/filler-section.component';
import { GalerySectionComponent } from './components/shared/galery-section/galery-section.component';
import { AboutSectionComponent } from './components/shared/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    CategoriesSectionComponent,
    CategoryPageComponent,
    BigCategorySectionComponent,
    FillerSectionComponent,
    GalerySectionComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
