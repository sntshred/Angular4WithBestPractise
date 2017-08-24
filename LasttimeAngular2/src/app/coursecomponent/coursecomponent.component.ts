import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursecomponent',
  templateUrl: './coursecomponent.component.html',
  styleUrls: ['./coursecomponent.component.css']
})
export class CoursecomponentComponent  {

  form = new FormGroup({
    topics:new FormArray([])
  })


//Simplier way
//   form1;
// constructor(fb:FormBuilder){
//   this.form1 = fb.group({
//     name:['',Validators.required],
//     contact:fb.group({
//       email:[],
//       phone:[]
//     }),
//     topics:fb.array([])
//   })
// }
  
  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }
  removetopic(topic:FormControl){
  let index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
  }

get topics(){
  return (this.form.get('topics') as FormArray)
}

  
}
