import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gif-module/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private gifService: GifsService
  ) { }

  ngOnInit(): void {}

  // ================ Propiedades del componente =================
  get historial(){
    return this.gifService.historial;
  }
}
