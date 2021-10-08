import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectComponent } from './protect.component';
import { routing } from './protect.route';



@NgModule({
  declarations: [
    ProtectComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class ProtectModule { }
