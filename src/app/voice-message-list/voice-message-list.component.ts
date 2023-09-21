import { Component, Input, OnInit } from '@angular/core';
import { Vocal } from '../interfaces/Vocal';
import { HttpClient } from '@angular/common/http';
import { FilterServiceService } from '../filter-service.service';

@Component({
  selector: 'app-voice-message-list',
  templateUrl: './voice-message-list.component.html',
  styleUrls: ['./voice-message-list.component.css'],
})
export class VoiceMessageListComponent implements OnInit {
  allVocals: Vocal[] = [];
  angryVocals: Vocal[] = [];

  vocauxList: Vocal[] = [];
  angryFilter: boolean = false;

  @Input() searchBox: string = '';

  constructor(
    private http: HttpClient,
    private filterService: FilterServiceService
  ) {}

  ngOnInit() {
    this.loadInitialVoiceMessages();
    this.initializeFilterClickEvent();
  }

  private loadInitialVoiceMessages() {
    this.http.get<Vocal>('assets/vocaux.json').subscribe((data: any) => {
      this.allVocals = data;
      this.angryVocals = this.allVocals.filter(vocal => vocal.fache);
      this.vocauxList = this.allVocals;
    });
  }

  private initializeFilterClickEvent() {
    this.filterService.clickEvent.subscribe(() => {
      this.toggleFilter();
    });
  }

  private toggleFilter() {
    this.angryFilter = !this.angryFilter
    this.vocauxList = this.angryFilter ? this.angryVocals : this.allVocals;
  }
}
