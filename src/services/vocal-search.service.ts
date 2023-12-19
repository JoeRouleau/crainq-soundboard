import { Injectable } from '@angular/core';
import { Vocal } from 'src/app/interfaces/Vocal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VocalSearchService {
  allVocals: Vocal[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Vocal>('assets/vocaux.json').subscribe((data: any) => {
      this.allVocals = data;
    });
   }

  getSearchVocal(searchString: string): Vocal[] {
    return this.allVocals.filter(vocal => vocal.content.includes(searchString));
  }
}
