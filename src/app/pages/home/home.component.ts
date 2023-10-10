import { Component, OnInit } from '@angular/core';

import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any[] = [];
  fixedArticle: any = {};

  constructor() { }

  ngOnInit(): void {
    this.getArticles()
    this.getFixedArticle()
  }

  getArticles() {
    this.articles = dataFake.filter((item) => item.fixed === false);
  }

  getFixedArticle() {
    this.fixedArticle = dataFake.find((item) => item.fixed === true);
  };

}
