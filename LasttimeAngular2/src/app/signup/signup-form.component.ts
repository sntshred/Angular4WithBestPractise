import { usernameValidators } from './username-validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({

    account: new FormGroup({
      username: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),
          usernameValidators.cannotContainSpace
        ],
        usernameValidators.shouldbeunique
      ),
      password: new FormControl('', Validators.required)
    })

  })

  checker() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
  get username() {
    return this.form.get('account.username');
  }

}
