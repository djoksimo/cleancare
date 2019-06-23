import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
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
  constructor() { }

  ngOnInit() { }



}
