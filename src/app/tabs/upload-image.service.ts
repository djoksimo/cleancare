import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { pathToFileURL } from 'url';


@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  sendLogs(text) {
    console.log('should hit server');
    return of(true);
  }


  test(input) {
    console.log('hitting the service');
    console.log(input);
    return of(true);
  }


  uploadImage(text) {
    console.log(text);
    return of(true);
  }
}
