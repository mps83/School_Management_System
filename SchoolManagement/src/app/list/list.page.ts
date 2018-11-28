import { Component, OnInit } from '@angular/core';
import {Content, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ClassDataService } from './class-data.service';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  public items: Array<{ title: string; icon: string }> = [];
  constructor(private router: Router, private classService: ClassDataService) {
    for (let i = 1; i < 13; i++) {
      this.items.push({
        title: 'Class ' + i,
        icon: 'book'
      });
    }
  }
  openClass(item) {
    this.classService.setData(item.title);
    this.router.navigate(['/class']);
  }
  back() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
