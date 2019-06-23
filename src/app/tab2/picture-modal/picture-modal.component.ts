import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-picture-modal',
  templateUrl: './picture-modal.component.html',
  styleUrls: ['./picture-modal.component.scss'],
})
export class PictureModalComponent implements OnInit {

  constructor(public modalController: ModalController, private camera: Camera,
    public router:Router) {

  }

  ngOnInit() {
    console.log('it came in');
  }

  closeModal(){
    this.modalController.dismiss();
    this.router.navigateByUrl('/tabs/tab1');
  }


  async myDismiss() {
    await this.modalController.dismiss(true);
  }


  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 1,
    };

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      // this.currentImage = 'data:image/jpeg;base64,' + imageData;

    }, (error) => {
      console.log('camera issue');
    });
  }

}
