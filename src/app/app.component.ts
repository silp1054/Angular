import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  name: string;
  email:string;
  website: string;
  temas: string[];
  showTemas: boolean;

  constructor() {
    this.title= "Angular";
    this.name= "ArchLinux";
    this.email= "hola@ctrl-x.com.mx";
    this.website= "http://ctrl-x.com.mx";
    this.temas= ['Datos','Terror','Musica','Videos','Cine'];
    this.showTemas= false;
  }

  toggleTemas(){
    this.showTemas = !this.showTemas;
  }

  newTema(tema) {
    this.temas.push(tema.value);
    tema.value = '';
    return false;
  }
}
