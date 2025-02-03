import { Component } from '@angular/core';
import {  ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-pill-details',
  imports: [],
  templateUrl: './pill-details.component.html',
  styleUrl: './pill-details.component.css'
})
export class PillDetailsComponent {
  @ViewChild('printedPill') printedPill!: ElementRef;

  printInvoice() {
    if (!this.printedPill) return;

    const printContent = this.printedPill.nativeElement.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reload to restore the app state
  }
}
