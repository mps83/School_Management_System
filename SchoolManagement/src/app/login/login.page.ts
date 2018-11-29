import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData: any = [];
  password: any = '123456';
  email: any = 'mayank@gmail.com';
  selected: any;
  constructor(public loadingCtrl: LoadingController, private storage: Storage,
     private apiService: ApiService, private authGuard: AuthGuardService, private router: Router) { }
  login() {
    console.log('parents');
    const body = {
      email: this.email,
      password: this.password
    };
    return this.apiService.login('/login', body).subscribe(res => {
      this.loginData.push(res);
      // this.storage.set('token', this.loginData[0].token);
      console.log(this.loginData);
      this.authGuard.authenticated = this.loginData[0].auth;
      this.router.navigate(['/home']);
    });
  }
  ngOnInit() {
  }

}
