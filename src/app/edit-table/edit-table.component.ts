import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {

  columnas: string[] = ['id', 'description', 'delete'];
  datos: Articulo[] = [new Articulo(1, 'papas'),
  new Articulo(2, 'manzanas'),
  new Articulo(3, 'naranjas'),
  ];
  articuloselect: Articulo = new Articulo(0, "");
  
  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;
  removeLine(cod: number) {
    if (confirm("¿Estás segur@ de que lo quieres borrar?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
  removeAll(){
    this.datos.splice(0, this.datos.length)
  }
  addArticle() {
   let lastIndex: number = this.datos.length+1
    this.datos.push(new Articulo(lastIndex, this.articuloselect.description));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo(0, "");
  }
}

export class Articulo {
  constructor(public id: number, public description: string) {
  }
}