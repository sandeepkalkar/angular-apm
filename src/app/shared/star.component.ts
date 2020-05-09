import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']

})
export class StarComponent implements OnChanges{

    @Input()     rating: number = 4;
    starWidth : number;

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }

    onClick(): void{
        console.log(`The Rating ${this.rating} is clicked!`);
        this.ratingClicked.emit(`The Rating ${this.rating} is clicked!`);
    }
}