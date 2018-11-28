import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {
  email: any;
  password: any;
  msg: any;
  constructor(private apiService: ApiService, public alertController: AlertController, private router: Router) { }
  register() {
     const body = {
       email : this.email,
       password : this.password
     };
     return this.apiService.register('/signup', body).subscribe(res => {
       this.msg = res['message'];
       this.presentAlert(this.msg);

  });
}
async presentAlert(alrt_msg: any) {
  const alert = await this.alertController.create({
    header: 'Alert',
    message: alrt_msg,
    buttons: ['OK']
  });

  await alert.present();
  this.router.navigate(['/login']);
}
  ngOnInit() {
  }

}
