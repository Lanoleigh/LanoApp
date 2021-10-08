import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lano-app';
  property = "Zalano";
  firstname = "";
  lastname = "";
  fullname = "";
  age = "";
  name = "";
  code ="";

  output(){
    this.fullname = "Hey "+this.firstname + " " + this.lastname +", you said you are " + this.age + " years old.";
  }
  



}








