import { Component } from '@angular/core';
import { Vocal } from '../interfaces/Vocal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voice-message-list',
  templateUrl: './voice-message-list.component.html',
  styleUrls: ['./voice-message-list.component.css']
})
export class VoiceMessageListComponent {
  vocauxList: Vocal[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Vocal>('assets/vocaux.json').subscribe((data: any) => {
      this.vocauxList = data;
      console.log(this.vocauxList);
    });
  }

}
