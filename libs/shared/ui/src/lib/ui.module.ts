import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GreetingsComponent } from './greetings/greetings.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [GreetingsComponent],
  exports: [GreetingsComponent]
})
export class UiModule {}
