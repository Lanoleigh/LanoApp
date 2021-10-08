import { Component, OnInit } from '@angular/core';
import {AgentsService} from '../services/agents.service';

@Component({
  selector: 'app-app-a',
  templateUrl: './app-a.component.html',
  styleUrls: ['./app-a.component.scss']
})
export class AppAComponent implements OnInit {
  agentData:any;
  agents:any[]=[];
  constructor(private agentsService:AgentsService ) { }

  ngOnInit(): void {
    this.agentData = this.agentsService.getAgents();
  }
  agentClicked(item:any){
    this.agents=item.children;
    
  }

}
