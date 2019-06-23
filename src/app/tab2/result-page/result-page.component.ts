import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as _ from 'lodash';

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
    console.log(this.sortedResultSet);
  }


  takeBackToCamera() {
    this.modalController.dismiss();
    // this.router.navigateByUrl('')
  }

  closeModal() {
    this.modalController.dismiss();
    this.router.navigateByUrl('/tabs/tabs/tab1');
  }

  gotToResultBreakdown() {

  }

  changeInSegment() {
    this.productSegment = !this.productSegment;
  }




  sortProperties(obj) {
    // convert object into array
    const sortable = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        sortable.push([key, obj[key]]); // each item is an array in format [key, value]
      }
    }
    // sort items by value
    sortable.sort((a, b) => {
      return a[1] - b[1]; // compare numbers
    });
    return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
  }


}
