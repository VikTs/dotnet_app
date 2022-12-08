import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sport-component',
  templateUrl: './sport.component.html'
})
export class SportComponent {
  public sportList$: Observable<ISport[]>;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.sportList$ = http.get<ISport[]>(baseUrl + 'sports');
  }
}

interface ISport {
  name: string;
  description: string;
}
