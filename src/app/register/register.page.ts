import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {

  }

  async register(from) {
    const loading = await this.loadingCtrl.create({
      duration: 500
    });

    await loading.present();

    loading.onDidDismiss();

    const alert = await this.alertCtrl.create({
      header: 'Registered!',
      message: 'Thanks for registering.',
      buttons: ['Dismiss']
    });

    await alert.present();

  }

}
