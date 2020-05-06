import { Component, OnInit } from '@angular/core';
import {Router, Route} from '@angular/router';

@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.css']
})
export class ListRoutesComponent implements OnInit {

  rutas: any;


  constructor(private route: Router) {
    const usuarios = [{ 'nombre': 'userTest1', 'permisos': ['Liberia1', 'Liberia2' ]}, { 'nombre': 'userTest2', 'permisos': ['Liberia2']}];
    const usuario = usuarios[1];

    this.rutas = this.route.config.filter(value => usuario.permisos.includes(value.data.id));
  }

  ngOnInit(): void {
    //console.log(this.rutas);
    console.log('ngOnInit');
  }

  miFuncion1() {
    this.route.navigate(['/page1']);
  }

  miFuncion2() {
    this.route.navigate(['/page2']);
  }

}
