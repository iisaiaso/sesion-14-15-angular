import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  titulo: string = 'Data Binding Interpolation '
  texto!: string
  element = false;
  valueButton: string = 'Show'
  
  showData() {
    this.texto = 'Event Binding, es el mecanismo de data binding mediante el cual trabaja con los eventos que se encuentra en el DOM'
    this.valueButton = "Hide"
    return (this.element = true);
  }
  hideData() {
    this.valueButton = "Show"
    return (this.element = false);
  }



  twoWay!: string
}
