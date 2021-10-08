import { Component, OnInit } from '@angular/core';
import { LoadSheddingService } from '../services/load-shedding.service';

@Component({
  selector: 'app-load-ss',
  templateUrl: './load-ss.component.html',
  styleUrls: ['./load-ss.component.scss']
})
export class LoadSSComponent implements OnInit {
  loadsheddingData: any;
  constructor(
    private loadsheddingService: LoadSheddingService
  ) { }

  ngOnInit(): void {
    this.loadsheddingData = this.loadsheddingService.getData();
  }

}
