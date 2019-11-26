import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrandLogoComponent } from './components/atoms/brand-logo/brand-logo.component';
import { ItemMenuComponent } from './components/atoms/item-menu/item-menu.component';
import { MainMenuComponent } from './components/molecules/main-menu/main-menu.component';
import { MaterialModule } from './modules/material.module'

@NgModule({
  imports:      [ BrowserModule, FormsModule , MaterialModule],
  declarations: [ AppComponent,  BrandLogoComponent, ItemMenuComponent, MainMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
