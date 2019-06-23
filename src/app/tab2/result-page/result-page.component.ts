import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as _  from 'lodash';
import { SymptomsPageComponent } from '../symptoms-page/symptoms-page.component';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  @Input() imageSrc;
  @Input() resultSet;
  maxValue;
  sortedResultSet;
  productSegment = true;
  constructor(navParams: NavParams, public modalController: ModalController, public router: Router) {
    this.imageSrc = navParams.data.imageSrc;
    this.resultSet = navParams.data.resultSet;
  }

  ngOnInit() {
    this.sortedResultSet = this.sortProperties(this.resultSet);
    var found = false;
    var index = this.sortedResultSet.length - 2;
    while (!found) {
      this.maxValue = this.sortedResultSet[index];
      let item = this.maxValue;
      if (!(item[0] !== 'web entities length' && item[0] !== 'Tooth enamel'
        && item[0] !== 'Tooth' && item[0] !== 'Health' && item[0] !== 'Dental braces' && item[0] !== 'Tooth whitening'
        && item[0] !== 'Human tooth' && item[0] !== 'Dentistry' && item[0] !== 'Human mouth'
        && item[0] !== 'Gums' && item[0] !== 'Permanent teeth')) {
        index = index - 1;
      } else {
        found = true;
      }
    }
  }


  takeBackToCamera() {
    this.modalController.dismiss();
    // this.router.navigateByUrl('')
  }

  closeModal() {
    this.modalController.dismiss();
    this.router.navigateByUrl('/tabs/tabs/tab1');
  }

  goToResultBreakdown() {
    this.presentResultsModal();
  }

  changeInSegment() {
    this.productSegment = !this.productSegment;
  }




  sortProperties(obj) {
    // convert object into array
    const sortable = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        sortable.push([key.replace(/_/g, ' '), obj[key]]); // each item is an array in format [key, value]
      }
    }
    // sort items by value
    sortable.sort((a, b) => {
      return a[1] - b[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
  }


  async presentResultsModal() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: SymptomsPageComponent,
        animated: true,
        componentProps: {
          resultSet: this.sortedResultSet
        }
      });

    modal.onDidDismiss().then((detail) => {
    });

    await modal.present();
  }


}
