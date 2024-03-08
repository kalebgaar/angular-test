import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestModule } from '@ng-packagr-test/module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
    CommonModule,
	BrowserModule,
	TestModule
  ],
  bootstrap: [
	AppComponent
  ]
})
export class AppModule { }
