import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PictureModalComponent } from '../tab2/picture-modal/picture-modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) { }

  openModal() {
    this.presentModal().then((response) => {
      console.log(response);
    },
      (error) => {
        console.log(error);
      });
  }

  async presentModal() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: PictureModalComponent,
        animated: true
      });

    modal.onDidDismiss().then((detail) => {
      if (detail !== null) {
        console.log('The result:', detail.data);
      }
    });

    await modal.present();
  }
}
