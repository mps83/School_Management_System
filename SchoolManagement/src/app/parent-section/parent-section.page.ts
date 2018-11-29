import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-parent-section',
  templateUrl: './parent-section.page.html',
  styleUrls: ['./parent-section.page.scss'],
})
export class ParentSectionPage implements OnInit {
  loginData: any = [];
  password: any = '123456';
  email: any = 'mayank@gmail.com';
  constructor(public loadingCtrl: LoadingController,
    private apiService: ApiService, private authGuard: AuthGuardService, private router: Router) { }

    login() {
      console.log('parents');
      const body = {
        email: this.email,
        password: this.password
      };
      return this.apiService.login('/login', body).subscribe(res => {
        this.loginData.push(res);
        console.log(this.loginData);
        this.authGuard.authenticated = this.loginData[0].auth;
        this.router.navigate(['/parentHome']);
      });
    }
  ngOnInit() {
  }

}
