import { Greetings } from '@a-boss/domain';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {
  private apiUrl = 'http://localhost:3333/api';
  private mensajes$: Observable<Greetings[]>;

  constructor(private httpClient: HttpClient) {
    this.mensajes$ = this.httpClient.get<Greetings[]>(this.apiUrl);
  }
  
  public getMensajes$() {
    return this.mensajes$;
  }
  
}
