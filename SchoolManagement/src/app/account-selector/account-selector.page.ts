import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-selector',
  templateUrl: './account-selector.page.html',
  styleUrls: ['./account-selector.page.scss'],
})
export class AccountSelectorPage implements OnInit {

  constructor(private route: Router) { }
  selAccType(type: any) {
    console.log(type);
    if (type === 'parent') {
      this.route.navigate(['/parentSection']);
    } else {
      this.route.navigate(['/login']);
    }
   }
  ngOnInit() {
  }

}
