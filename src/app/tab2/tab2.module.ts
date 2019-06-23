import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { PictureModalComponent } from '../tab2/picture-modal/picture-modal.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SymptomsPageComponent } from './symptoms-page/symptoms-page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, PictureModalComponent, ResultPageComponent, SymptomsPageComponent],
  entryComponents: [PictureModalComponent, ResultPageComponent, SymptomsPageComponent],
  exports: [PictureModalComponent]
})
export class Tab2PageModule { }
