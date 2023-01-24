import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Article } from '../classes/Article';


@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {

  columnas: string[] = ['id', 'description', 'delete'];
  articleList: Article[] = [];
  description!: string;


  @ViewChild(MatTable) table!: MatTable<String>;
  removeLine(cod: number) {
    this.articleList.splice(cod, 1);
    this.table.renderRows();
  }
  removeAll() {
    if (confirm("¿Estás segur@ de que quieres borrar todo?")) {
      this.articleList.splice(0, this.articleList.length);
      this.table.renderRows();
    }
  }
  addArticle() {
    let art = new Article(this.articleList.length ,this.description);
    this.articleList.push(art);
    this.table.renderRows();
  }

}

