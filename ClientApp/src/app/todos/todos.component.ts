import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent {
  public todos$: Observable<IToDo[]>;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.todos$ = http.get<IToDo[]>(baseUrl + 'todo');
    http.get<IToDo[]>(baseUrl + 'todo/1').subscribe();
    http.get<IToDo[]>(baseUrl + 'todo/2').subscribe();
    http.post<IToDo>(baseUrl + 'todo', { name: '3', isComplete: false }).subscribe();
  }
}

interface IToDo {
  name: string;
  isComplete: boolean;
}
