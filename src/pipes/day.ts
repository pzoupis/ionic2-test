import { Injectable, Pipe } from '@angular/core';

const DAYS: string[] = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];

@Pipe({
    name: 'day'
})
@Injectable()
export class DayPipe {
    transform(value: string, args: any[]): string {
        let day: Date;
        day = new Date();
        let number = day.getDay() + parseInt(value, 10);
        return DAYS[number % 7];
    }
}