import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  exibirModal: boolean = false;

  onDisplayModal($event: any) {
    this.exibirModal = true;
  }
  onHideModal() {
    this.exibirModal = false;
  }
  hideElements() {
    this.exibirModal = false;
  }

}
