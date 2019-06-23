import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {

  }

  async login(from) {
    const loading = await this.loadingCtrl.create({
      duration: 500
    });

    await loading.present();

    loading.onDidDismiss();

    const alert = await this.alertCtrl.create({
      header: 'Logged In!',
      message: 'Thanks for logging in.',
      buttons: ['Dismiss']
    });

    await alert.present();

    this.router.navigateByUrl('/tabs/tabs/tab1');

  }

}
