import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(
    private gifService: GifsService
  ) { }

  ngOnInit(): void {}

  // ================= Propiedades del componente ==============
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  historial: string[] = [];

  // ================= Funciones del componente =================
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.length === 0){
      return
    }
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }



}
