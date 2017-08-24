import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'faviortes',
  templateUrl: './faviortes.component.html',
  styleUrls: ['./faviortes.component.css'],
  styles:[`
 .glyphicon{

    color: red;

}

  `]

})
export class FaviortesComponent {

 @Input('isActive') isSelected:boolean;
  constructor() { }
@Output('change') click= new EventEmitter()

onClick(){
    this.isSelected=!this.isSelected;
    this.click.emit({prop:"hello world"});
  }


}


  export interface eventInterface{
    prop:string
  }
