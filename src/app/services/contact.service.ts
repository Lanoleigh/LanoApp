import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactDetails =[
    {
      description:'ClickOn System sms Numbers',
      person:'Automated System',
      contactd:'082 216 0255 | 071 600 4520'
    },
    {
      description:'Mooikloof Ridge Control Room',
      person:	'Security on duty',
      contactd:'071 678 9869 | 082 864 1164'
    },
    {
      description:'Mooikloof Ridge Office',
      person:'Kerry Brummer',
      contactd:'(012) 480 2075 | (012) 480 4051 | office@mooikloofridge.com'
      
    },
    {
      description:'Mooikloof Ridge Estate Manager',
      person:'Theo van Rensen',
      contactd:'071 685 6438 | estatemanager@mooikloofridge.com'
    },
    {
      description:'Mooikloof Ridge Managing Agent',
      person:'',
      contactd:''
    },
    {
      description:'',
      person:'',
      contactd:''
    },
    {
      description:'',
      person:'',
      contactd:''
    },
    {
      description:'',
      person:'',
      contactd:''
    },
    {
      description:'',
      person:'',
      contactd:''
    },
    {
      description:'',
      person:'',
      contactd:''
    },
    {
      description:'',
      person:'',
      contactd:''
    },
  ]

  constructor() { }
}
