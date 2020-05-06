import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.css']
})
export class ListRoutesComponent implements OnInit {

  rutas: any;

  constructor(private route: Router) {
    this.rutas = this.route.config.filter(value => value.data.id === 'Liberia1' || value.data.id === 'Liberia2');
    console.log(route);
  }

  ngOnInit(): void {
    console.log(this.rutas);
    console.log('ngOnInit');
  }

  miFuncion1() {
    this.route.navigate(['/page1']);
  }

  miFuncion2() {
    this.route.navigate(['/page2']);
  }

}
