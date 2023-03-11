import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html'
})

export class MuestraNombreComponent implements OnChanges{

  @Input() nombre!: string; 
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}