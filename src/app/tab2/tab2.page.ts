import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UploadImageService } from '../tabs/upload-image.service';
import { FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { ModalController } from '@ionic/angular';
import { PictureModalComponent } from '../tab2/picture-modal/picture-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera, private uploadService: UploadImageService,
    private fileTransfer: FileTransfer, public modalController: ModalController
  ) {
    this.presentModal().then((response) => {
      console.log(response);
    },
      (error) => {
        console.log(error);
      });
  }

  async presentModal() {
    // console.log('it is coming in the call function');
    // const modal = await this.modalController.create({
    //   component: PictureModalComponent,
    //   animated: true
    // });
    // const { data } = await modal.onDidDismiss();
    // console.log(data);
    // return await modal.present();
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: PictureModalComponent,
          animated:true
    });
     
    modal.onDidDismiss().then((detail) => {
       if (detail !== null) {
         console.log('The result:', detail.data);
       }
    });
    
    await modal.present();
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
      this.currentImage = 'data:image/jpeg;base64,' + imageData;


      const url = 'http://localhost:4000/uploadImage';

      const uploadOptions: FileUploadOptions = {
        fileKey: 'incomingImage',
        chunkedMode: false,
        mimeType: 'multipart/form-data',
      };

      const transfer = this.fileTransfer.create();

      transfer.upload(imageData, url, uploadOptions).then((response) => {
        this.sendLogs('File Upload successful + ' + response);
        console.log('File Upload successful + ' + response);
      }).catch((error) => {
        this.sendLogs('Could not upload file');
        console.log('Could not upload file');
      });

      this.sendLogs(imageData);
      console.log(imageData);

    }, (error) => {
      console.log('camera issue');
    });
  }


  testClick() {
    this.presentModal().then((response) => {
      console.log(response);
    },
      (error) => {
        console.log(error);
      });
    // this.sendLogs('test button click');
    console.log('It fucking shows up');
  }

  sendLogs(text) {
    this.uploadService.sendLogs(text).subscribe((response) => {

    }, (error) => {
      console.log(error);
    });
  }
}
