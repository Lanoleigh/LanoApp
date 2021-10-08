import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routing } from './contact.route';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';




@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    routing,
    CardModule,
    TabViewModule
    
  ]
})  
export class ContactModule { }
