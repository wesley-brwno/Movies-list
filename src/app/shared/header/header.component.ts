import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() exibitModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  displayModal() {
    this.exibitModal.emit(true);   
  }
}
