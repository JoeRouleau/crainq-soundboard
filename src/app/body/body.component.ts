import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { VoiceMessageListComponent } from '../voice-message-list/voice-message-list.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @ViewChild('msglist') childComponent!: VoiceMessageListComponent
  
  inputValue: string = '';

  searchKeyEnter(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value

    console.log(this.inputValue)
    this.childComponent.onSearchKey(this.inputValue);
  }
}
