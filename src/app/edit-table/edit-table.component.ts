import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {

  columnas: string[] = ['id', 'description', 'delete'];
  data: Articulo[] = [new Articulo(1, 'papas'),
  new Articulo(2, 'manzanas'),
  new Articulo(3, 'naranjas'),
  ];
  articuloselect: Articulo = new Articulo(0, "");

  @ViewChild(MatTable) table!: MatTable<Articulo>;
  removeLine(cod: number) {
    this.data.splice(cod, 1);
    this.table.renderRows();
  }
  removeAll() {
    if (confirm("¿Estás segur@ de que quieres borrar todo?")) {
      this.data.splice(0, this.data.length);
      this.table.renderRows();
    }
  }
  addArticle() {
    let lastIndex: number = this.data.length + 1;
    this.data.push(new Articulo(lastIndex, this.articuloselect.description));
    this.table.renderRows();
  }
}

export class Articulo {
  constructor(public id: number, public description: string) {
  }
}