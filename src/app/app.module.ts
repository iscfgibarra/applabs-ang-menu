import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrandLogoComponent } from './components/atoms/brand-logo/brand-logo.component';
import { ItemMenuComponent } from './components/atoms/item-menu/item-menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BrandLogoComponent, ItemMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
