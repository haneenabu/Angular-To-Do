import { Component } from '@angular/core';

//This is a components annotationi
//This will determine where the components class definition
//Will go in the HTML
//THIS IS HOW A COMPONENT APPEARS
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
  </div>
  `
})

//This is the components class definition
//THIS IS HOW A COMPONENT BEHAVES
export class AppComponent {

}
