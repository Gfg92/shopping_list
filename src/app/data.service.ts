import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './classes/Article';
import { LoginService } from './login/login.service';




@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient: HttpClient, private loginService: LoginService) { }


  saveArticles(articles: Article[]) {
    this.httpClient.put('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/editArticleList.json', articles).subscribe(
      response => console.log("Se han guardado los artículos" + response),
      error => console.log("Error: " + error),
    );
    this.httpClient.put('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/articleList.json', articles).subscribe(
      response => console.log("Se han guardado los artículos" + response),
      error => console.log("Error: " + error),
    );
  }
  deleteArticle(id: number) {
    let url = 'https://db-article-default-rtdb.europe-west1.firebasedatabase.app/editArticleList/' + id + '.json';
    this.httpClient.delete(url).subscribe(
      response => console.log("Se ha eliminado el artículo: " + response),
      error => console.log("Error " + error),
    );

    let url1 = 'https://db-article-default-rtdb.europe-west1.firebasedatabase.app/articleList/' + id + '.json';
    this.httpClient.delete(url1).subscribe(
      response => console.log("Se ha eliminado el artículo: " + response),
      error => console.log("Error " + error),
    );

    // let url2 = 'https://db-article-default-rtdb.europe-west1.firebasedatabase.app/purchasedArticleList/' + id + '.json';
    // this.httpClient.delete(url2).subscribe(
    //   response => console.log("Se ha eliminado el artículo: " + response),
    //   error => console.log("Error " + error),
    // );

  }

  dropArticles() {
    this.httpClient.delete('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/editArticleList.json').subscribe()
    this.httpClient.delete('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/articleList.json').subscribe()
  }

  loadEditArticleList() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/editArticleList.json?auth=' + token)
  }

  loadArticleList() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/articleList.json?auth=' + token)
  }

}
