import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadSSComponent } from './load-ss.component';
import { routing } from './load-ss.route';
import {CardModule} from 'primeng/card';
import { LoadSheddingService } from '../services/load-shedding.service';

@NgModule({
  declarations: [
    LoadSSComponent
  ],
  imports: [
    CommonModule,
    routing,
    CardModule
  ],
  providers:[
    LoadSheddingService
  ]
})
export class LoadSSModule { }
