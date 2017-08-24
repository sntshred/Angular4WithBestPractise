
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{

    handleError(error: any): void {
        alert("unexpected error from Error Handler")
        console.log(error);
    }

}