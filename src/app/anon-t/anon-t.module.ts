import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnonTComponent } from './anon-t.component';
import { routing } from './anon-t.route';



@NgModule({
  declarations: [
    AnonTComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class AnonTModule { }
