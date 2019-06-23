import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { PictureModalComponent } from '../tab2/picture-modal/picture-modal.component';
import { Tab2PageModule } from '../tab2/tab2.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    Tab2PageModule
  ],
  declarations: [TabsPage],
  entryComponents: [PictureModalComponent]
})
export class TabsPageModule { }
