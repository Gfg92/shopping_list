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

  columnas: string[] = ['description', 'delete'];
  articleList: Article[] = [];
  boughtList: Article[] = [];
  description!: string;
  selectedArticles: Article[] = [];
  check: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getArticles().subscribe(myArticles => {
      console.log(myArticles);
      this.articleList = Object.values(myArticles);
    });

    this.getBoughtArticles().subscribe(myArt => {
      console.log(myArt);
      this.boughtList = Object.values(myArt);
    });
  }

  getArticles() {
    return this.dataService.loadArticles()
  }
  @ViewChild(MatTable) table!: MatTable<String>;
  removeArticle(cod: number) {
    this.articleList.splice(cod, 1);
    this.table.renderRows();
    this.dataService.deleteArticle(cod);
    this.dataService.saveArticles(this.articleList);
  }

  addBoughtList(art: Article, cod:number) {
      this.boughtList.push(art);
      this.dataService.addBoughtArticle(this.boughtList);
      this.removeArticle(cod);
  }

  getBoughtArticles() {
    return this.dataService.loadBoughtArticle()
  }




}
