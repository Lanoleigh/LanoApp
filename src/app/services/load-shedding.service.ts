import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadSheddingService {
  loadsheddingData = [
    {
      Name: 'Stage 1',
      Description: 'Power will be off for 1 hour.',
      range: '13:00 - 14:00'
    },
    {
      Name: 'Stage 2',
      Description: 'Power will be off for 1 hour.',
      range: '13:00 - 14:00'
    },
    {
      Name: 'Stage 3',
      Description: 'Power will be off for 1 hour.',
      range: '13:00 - 14:00'
    },
    {
      Name: 'Stage 4',
      Description: 'Power will be off for 1 hour.',
      range: '13:00 - 14:00'
    },
  ]
  constructor() { }
  
  getData(){
    return this.loadsheddingData;
  }

}
