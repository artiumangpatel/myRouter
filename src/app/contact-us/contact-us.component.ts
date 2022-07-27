import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  firstName: any;
  lastName: any;
  Country: any;
  comments:any;
  constructor() { }
  
  ngOnInit(): void {
  }
  canExit(){
    if(this.firstName||this.lastName||this.Country||this.comments)
    {
      console.log(this.firstName);
      return confirm('you have unsaved changes.Do you really want to discard this changes?')
    }else
    {
      return true;
    }
  }

}
