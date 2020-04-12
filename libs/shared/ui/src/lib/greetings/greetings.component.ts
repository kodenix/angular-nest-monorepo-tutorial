import { GreetingsService } from '@a-boss/data';
import { Greetings } from '@a-boss/domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-ui-greetings',
  template: `
    <p>
      {{ theGreeting.message }}
    </p>
    <ul>
      <li *ngFor="let gret of listMensajes">{{ gret.message }}</li>
    </ul>
  `,
  styles: [
  ],
})
export class GreetingsComponent implements OnInit {

  public theGreeting: Greetings = { message: 'Hello world' };
  public listMensajes: Greetings[] = [];

  constructor(
    private greetingsService: GreetingsService) {}

  ngOnInit(): void {
    
    this.greetingsService.getMensajes$()
      .subscribe((apiGreetings: Greetings[]) => { 
        
        console.log(apiGreetings);
        this.listMensajes = apiGreetings;
        console.log(this.listMensajes); 
        
      });
    
    // console.log(this.greetingsService.getMensajes());
    //this.greetingsService.getGrettings$().subscribe(this.appendApiMessage);
  }

  // private appendApiMessage = (apiGreetings: Greetings) => (this.theGreeting.message += ' and ' + apiGreetings.message);

}
