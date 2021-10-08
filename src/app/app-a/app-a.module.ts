import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAComponent } from './app-a.component';
import { routing } from './app-a.route';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    AppAComponent
  ],
  imports: [
    CommonModule,
    routing,
    ScrollPanelModule,
    CardModule,
    ButtonModule
  ]
})
export class AppAModule { }
