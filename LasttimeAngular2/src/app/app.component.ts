import { eventInterface } from './faviortes/faviortes.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  post={
    favorite:true
}
  onFavoriteChange(fav:eventInterface){
    console.log("Favorite emit raised fron the app component",fav.prop)
  }
}