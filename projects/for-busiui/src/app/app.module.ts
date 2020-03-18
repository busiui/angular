import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const cust_tag = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('custom-items', cust_tag);
  }
  ngDoBootstrap() { }
}
