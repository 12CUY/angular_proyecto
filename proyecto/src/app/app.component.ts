import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  nombre = 'wiliam';
  edad = 30;
  img = 'http://sourcer.ansplash.com/random';

  disable = false;
  ejemplo = " ";

  person = {
    name: 'bryan',
    age : 54,
    avatar : ''
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }
  increaseAge(){
    this.person.age +- 1
  }

  onScroll(event: Event){
    const element = event.target as HTMLInputElement;
    console.log(element.scrollTop)
  }

}

