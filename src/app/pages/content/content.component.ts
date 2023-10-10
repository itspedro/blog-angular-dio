import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imgCover: string = "";
  title: string = "";
  description: string = "";

  private id: string | null = "0";


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.setValueToComponent(this.id || "0");
  }

  setValueToComponent(id: string) {
    const res = dataFake.find((item) => item.id === id);

    if (res) {
      this.imgCover = res.image;
      this.title = res.title;
      this.description = res.description;
    };

  };

}
