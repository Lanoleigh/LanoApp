import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule, 
    FormsModule, 
    CardModule,
    PanelModule,
    ButtonModule,
    DividerModule,
    MenubarModule,
    SidebarModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

