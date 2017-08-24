import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }
  courses=[1,2];

  viewmode="map";

chagneviewmode(x){
  return this.viewmode=x;
}

coursesfor;

onAdd(){
  this.coursesfor.push({Id:'4',name:"courses 4"});
}

onRemove(course){
  let index = this.coursesfor.indexOf(course);
  this.coursesfor.splice(index,1);
}


onChange(course){
 course.name="updated";
}

LoadCourse(){
  this.coursesfor =[{Id:'1',name:'course1'},{Id:'2',name:'course2'},{Id:'3',name:'course3'}];
}
trackCourse(index, course){
return course?course.id:undefined;
}

  ngOnInit() {
  }

}
