import {Pipe,PipeTransform}  from '@angular/core'
@Pipe({
    name:'summary'
})

export class custompipe implements PipeTransform{
transform(value:string,limit?:number){
    if(!value)
        return null;
    let actuallimt= limit?limit:50;
    return value.substring(0,actuallimt)+'...';
}
}