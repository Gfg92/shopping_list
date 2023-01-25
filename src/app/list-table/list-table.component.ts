import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Article } from '../classes/Article';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent {
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getArticles().subscribe(myArticles => {
      console.log(myArticles);
      this.articleList = Object.values(myArticles);
    });
  }

  columnas: string[] = ['description', 'delete'];
  articleList: Article[] = [];
  boughtList: Article[] = [];
  description!: string;
  selectedArticles: Article[] = [];


  @ViewChild(MatTable) table!: MatTable<String>;
  removeArticle(cod: number) {
    this.articleList.splice(cod, 1);
    this.table.renderRows();
    this.dataService.deleteArticle(cod);
    this.dataService.saveArticles(this.articleList);
  }
  removeAll() {
    if (confirm("¿Estás segur@ de que quieres borrar todo?")) {
      this.articleList.splice(0, this.articleList.length);
      this.table.renderRows();
      this.dataService.dropArticles();
    }
  }
  addArticle() {
    let art = new Article(this.description);
    this.articleList.push(art);
    this.table.renderRows();
    this.dataService.saveArticles(this.articleList);
  }
  getArticles() {
    return this.dataService.loadArticles()
  }

  addBoughtList(art: Article){
    this.boughtList.push(art);
  }




}
