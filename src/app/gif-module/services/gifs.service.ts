import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(
    private http: HttpClient
  ) {
    this.getDatosLocalStorage();
  }

  private _apiKey: string = 'qq5EFYcB6ska9q77aj8XsNYh84xm9PIT';

  // Variable que contiene la lista de países
  private _historial: string[] = [];

  // Mantiene la data del historial de búsqueda
  get historial(){
    return [...this._historial];
  }

  // Agrega valores al historial de búsqueda
  buscarGifs(query: string){
    query = query.toLowerCase();
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=qq5EFYcB6ska9q77aj8XsNYh84xm9PIT&q=hola&limit=20').subscribe(
      response => console.log(response)
    )
    if(this._historial.includes(query)) return;
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);
    this.saveLocalStorage();
  }

  // Guardar historial de búsqueda en local storage
  saveLocalStorage(){
    localStorage.setItem('historial',JSON.stringify(this._historial));
  }

  // Obtener el historial almacenado en local storage
  getDatosLocalStorage(){
    const historial = localStorage.getItem('historial');
    this._historial = JSON.parse(localStorage.getItem('historial') || '');
  }

}
