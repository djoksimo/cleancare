import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';

export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  timeInSeconds: number;
  timer: CountdownTimer;
  constructor(
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.initTimer();
  }

  async presentToast(start: boolean) {
    const toast = await this.toastController.create({
      message: start ? 'Start brushing your teeth.' : 'Stop brushing your teeth.',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  hasFinished() {
    this.presentToast(false);
    return this.timer.hasFinished;
  }

  initTimer() {
    this.timeInSeconds = 120;
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  toggleTimer() {
    if (this.timer.runTimer && this.timer.hasStarted && !this.timer.hasFinished) {
      this.pauseTimer();
    } else if (!this.timer.runTimer && this.timer.hasStarted && !this.timer.hasFinished) {
      this.resumeTimer();
    } else if (!this.timer.hasStarted) {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timeInSeconds === 120) this.presentToast(true);
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      } else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let minutesString = '';
    let secondsString = '';
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return minutesString + ':' + secondsString;
  }

  updateValue($event: any) {
  }
  
}
