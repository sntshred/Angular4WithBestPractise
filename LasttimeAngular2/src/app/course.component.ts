import { CoursesService } from './course.service';
import { Component } from '@angular/core';

@Component({
    selector:'cousrse',
    template:`
    //Property Binding
    // <img src="{{imageUrl}}"  />
    //  <img [src]="imageUrl"  />
    <br>
    //Attribute Binding
    <table>
    <tr style="border:1px solid black">
    <td  [attr.colspan]="colspan">hoo</td>
    </tr>
    </table>
    
    <button class="btn btn-primary" [class.cl]="isActive">class binding</button>
    <br>
    Style Binding
    <br>
    <button class="btn btn-primary" [style.backgroundColor]="isActive?'green':'white'">style Binding</button>
    <br>
    Event Binding
    <br>
    <div (click)="onTopDivClicked()"> 
    <div (click)="onDivClicked()" >
    <button class="btn btn-primary" (click)="save($event)">Event Binding</button>
    </div>
    </div>
    <br>
    Event Filtering 
    <br>
    <input type="text" (keyup.enter)="onKeyEnter()" />
    <br>
    without Temlate Variable 
    <br>
    <input type="text" (keyup.enter)="onKeyEnter1($event)" />
    <br>
    Temlate Variable 
    <br>
    <input type="text"  #email (keyup.enter)="onKeyEnter2(email.value)" />
    <br>
  Two way Binding
    <br>
    <input type="text" [(ngModel)]="emailtwoway" (keyup.enter)="onKeyEnter3()" /> {{emailtwoway}}
    <br>
//custom Pipes
    <br>
    <p>{{forcustompipe|summary:5}}</p>



    <ul >
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `
})

export class CourseComponent{
    title;
    courses;
    imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-bnlWzwwQv3gmh60QJ1xmUde0Dk4SVsMgIX9W-eOIO8XEHlgeQ";
    colspan=2;
    isActive=true;

    forcustompipe='I pursued my Masters in Computer and Information Sciences from Kent State University, graduated in December 2016. I aspire to become a leading Software and Web Developer by dedicating myself to enhance my knowledge in';


    constructor(service:CoursesService){
        // let service = new CoursesService()
        this.courses=service.getCourses();

    }

    getCourse(){
        return this.title="hello world the course is here";
    }

    save($event){
        $event.stopPropagation();
        console.log("This is the save method" , $event);
    }
    onDivClicked(){
        console.log("Div got clicked");
    }

    onTopDivClicked()
    {
        console.log("top div got clicked");
    }

    onKeyEnter(){
        console.log("key entered");
    }
     onKeyEnter1($event){
        console.log($event.target.value);
    }
     onKeyEnter2(email){
        console.log(email);
    }
    emailtwoway
    onKeyEnter3(email){
        console.log(this.emailtwoway);
    }

}