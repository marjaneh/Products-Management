import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: number;
  @Input() isRatingEditable: boolean = true;

  startRatingWith: number = 0;

  
}
