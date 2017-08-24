import { GithubFollowersService } from './Services/github-followers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponentComponent } from './github-profile-component/github-profile-component.component';
import { GithubFollowersComponentComponent } from './github-followers-component/github-followers-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppErrorHandler } from './Common/erro-handler';
import { PostserviceService } from './Services/postservice.service';

import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import { CoursecomponentComponent } from './coursecomponent/coursecomponent.component';
import { SignupFormComponent } from './signup/signup-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InputFormatDirective } from './input-format.directive';
import { custompipe } from './custom.pipe';
import { AuthorServiceService } from './author-service.service';
import { CoursesService } from './course.service';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FaviortesComponent } from './faviortes/faviortes.component';
import { PanelComponent } from './panel/panel.component';
import { DirectiveComponent } from './directive/directive.component';
import {RouterModule} from  '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    custompipe,
    SignupFormComponent,
    FaviortesComponent,
    PanelComponent,
    NavbarComponent,
    HomeComponentComponent,
    GithubFollowersComponentComponent,
    GithubProfileComponentComponent,
    PostcomponentComponent,
    NotFoundComponent,
    DirectiveComponent,
    InputFormatDirective,
    ContactFormComponent,
    CoursecomponentComponent,
    PostcomponentComponent,
    NavbarComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GithubFollowersService,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponentComponent
      },
      {
        path:'followers/:id/:username',
        component:GithubProfileComponentComponent
      },
      {
        path:'followers',
        component:GithubFollowersComponentComponent
      },
      
      {
        path:'posts',
        component:PostcomponentComponent
      }
      ,
      {
        path:'**',
        component:NotFoundComponent
      }
    ]
      )
  ],
  providers: [
    CoursesService,
    AuthorServiceService,
    PostserviceService,
    {provide:ErrorHandler,useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
