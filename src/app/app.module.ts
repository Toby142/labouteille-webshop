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
import { ContactSectionComponent } from './components/shared/contact-section/contact-section.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ArtGalleryPageComponent } from './components/pages/art-gallery-page/art-gallery-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';

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
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    NavbarComponent,
    ProductPageComponent,
    ArtGalleryPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
