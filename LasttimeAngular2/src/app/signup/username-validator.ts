
import { AbstractControl, ValidationErrors } from "@angular/forms/forms";

export class usernameValidators {
  static cannotContainSpace(control:AbstractControl): ValidationErrors|null{
        if((control.value as string).indexOf(' ')>0){
            return {cannotContainSpace:true}
        }
    }

  static shouldbeunique(control: AbstractControl): Promise<ValidationErrors | null> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control.value === 'mosh')
                resolve({ shouldbeunique: true });
            else 
                resolve(null);

        }, 2000);
      }); 
   }
}