import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
log(x){
  console.log(x);
}

submit(x){
  console.log(x);
}

contactmethods=[{Id:'1',name:'contact1'},{Id:'2',name:'contact2'},{Id:'3',name:'contact3'}];
  ngOnInit() {
  }

}
