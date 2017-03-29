import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HumanComponent } from './human.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {routing} from './route';
import {HumanService} from './app.service'
  

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing],
    declarations: [AppComponent, HumanComponent],
    bootstrap: [AppComponent],
    providers :[HumanService]
})
export class AppModule {}