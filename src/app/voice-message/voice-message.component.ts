import { Component, Input, OnInit } from '@angular/core';
import {Howl} from 'howler';
import { Vocal } from '../interfaces/Vocal';
import { SoundMode } from '../interfaces/SoundMode';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voice-message',
  templateUrl: './voice-message.component.html',
  styleUrls: ['./voice-message.component.css']
})
export class VoiceMessageComponent implements OnInit {
  @Input() vocal: Vocal = {} as Vocal;
  mode : SoundMode = SoundMode.Stop;
  iconName: string = "play_circle_outline";
  sound: Howl = {} as Howl;
  dureeVocal: string = "0";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.sound = new Howl({
      src:[this.vocal.path],
    });

    
    var durationInSeconds = this.sound.duration();
    var formattedDuration = this.formatTime(durationInSeconds);
    this.dureeVocal = formattedDuration;
    
    return new Promise((resolve, reject) => {
      this.sound.on('load', function() { 
      })
    })
  }

  public click(mode: string) {
    if(mode === SoundMode.Stop) {
      this.play()
    }
    else {
      this.stop();
    }
  }

  public play() {
    this.mode = SoundMode.Play
    this.iconName = "stop_circle_outline"
    
    this.sound.play();
    this.sound.once('end', () => {
      this.stop();
    })
  }

  public stop() {
    this.mode = SoundMode.Stop;
    this.iconName = "play_circle_outline"
    this.sound.stop();
  }

  public download() {
    const audioFileUrl = this.vocal.path;

    this.http.get(audioFileUrl, { responseType: 'blob'}).subscribe(response => {
      const downloadLink = document.createElement('a');
      const blob = new Blob([response], {type: 'audio/wav'});
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = `${this.vocal.path}.wav`
      downloadLink.click();
      URL.revokeObjectURL(url);
    })
  }

  public formatTime(duration: number) {
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

}
