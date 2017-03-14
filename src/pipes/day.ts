import { Injectable, Pipe } from '@angular/core';

const DAYS: string[] = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];

@Pipe({
    name: 'day'
})
@Injectable()
export class DayPipe {

    /**
     * This method is used as a pipe. It gets the number of a day
     * (0 being Sunday) and transforms that number to the
     * appropriate name of the day.
     * @param value The number of a day. Numbers from 0 to 6.
     * @param args 
     * @return A string with the first three letters of a day.
     */
    transform(value: string): string {
        let day: Date;
        day = new Date();
        let number = day.getDay() + parseInt(value, 10);
        return DAYS[number % 7];
    }
}