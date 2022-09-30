import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'roundingPipe'})

export class roundingPipe implements PipeTransform {
    transform(value: number){
        return value.toLocaleString();
    }
}