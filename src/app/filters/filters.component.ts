import { Component } from '@angular/core';
import { FilterServiceService } from '../filter-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  selected: boolean = false;

  constructor(private filterService: FilterServiceService) {}

  public toggleClass() {
    this.selected = !this.selected;
    this.filterService.triggerClickEvent();
  }

}
