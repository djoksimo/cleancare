import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss'],
})
export class DentistsComponent implements OnInit {

  history = [{
    img: '../../assets/history/1.jpeg',
    label: 'Gengivities - 80%'
  },
  {
    img: '../../assets/history/2.jpeg',
    label: 'Plaque - 40%'
  },
  {
    img: '../../assets/history/3.jpeg',
    label: 'Chipped Tooth - 30%'
  },
  {
    img: '../../assets/history/4.jpeg',
    label: 'Gengivities - 60%'
  }];
  
  constructor(private router: Router) { }

  ngOnInit() {}

  takeBackToSettings() {
    this.router.navigateByUrl('tabs/tabs/tab3');
  }

}
