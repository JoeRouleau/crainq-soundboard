import { Component, Input } from '@angular/core';
import {Howl, Howler} from 'howler';
import { Vocal } from '../interfaces/Vocal';

@Component({
  selector: 'app-voice-message',
  templateUrl: './voice-message.component.html',
  styleUrls: ['./voice-message.component.css']
})
export class VoiceMessageComponent {
  @Input() vocal: Vocal = {} as Vocal;

  public play() {
    Howler.stop();
    var sound = new Howl({
      src:[this.vocal.path],
    });
    sound.play();
  }

  public stop() {
    Howler.stop();
  }
}
