import { Component } from '@angular/core';

//This is a components annotationi
//This will determine where the components class definition
//Will go in the HTML
//THIS IS HOW A COMPONENT APPEARS
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
      <h1>{{jessica}}</h1>
    </ul>
  </div>
  `
})

//This is the components class definition
//THIS IS HOW A COMPONENT BEHAVES
export class AppComponent {
  currentFocus: string= 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth()+1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task []= [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ]

  jessica: object [] = this.tasks.filter( function(e) {
    return !e.done;
  });

}

export class Task {
  public done: boolean = false;
  constructor(public description: string) {

  }
  // constructor( public inputArray: string[], public homies: string,  ) {}
}
