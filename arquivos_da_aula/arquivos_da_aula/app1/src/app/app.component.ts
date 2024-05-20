import { Component } from '@angular/core'; //permite decorar a class, fazendo se tornar em um componente Angular

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
