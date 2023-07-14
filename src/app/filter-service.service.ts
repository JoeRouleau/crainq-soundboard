import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {
  clickEvent: EventEmitter<any> = new EventEmitter<any>();

  triggerClickEvent() {
    this.clickEvent.emit();
  }
}
