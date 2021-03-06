import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { HistoryComponent } from './settings/history/history.component';
import { ProductsComponent } from './settings/products/products.component';
import { DentistsComponent } from './settings/dentists/dentists.component';

@NgModule({
  declarations: [AppComponent, HistoryComponent, ProductsComponent, DentistsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    // FileUploadOptions,
// tslint:disable-next-line: deprecation
    FileTransfer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
