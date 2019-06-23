import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-symptoms-page',
  templateUrl: './symptoms-page.component.html',
  styleUrls: ['./symptoms-page.component.scss'],
})
export class SymptomsPageComponent implements OnInit {
  @Input() resultSet;
  constructor(public navParams: NavParams, public modalController: ModalController) {
    this.resultSet = navParams.data.resultSet;
    console.log(this.resultSet);
  }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }


}
