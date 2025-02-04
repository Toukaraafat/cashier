import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  imports: [],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})
export class OfferCardComponent {
  @Input() offer: any;
  @Output() sendToCategories = new EventEmitter(); 
}
