import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  sendLogs(text) {
    console.log('should hit server');
    return this.http.post('http://localhost:4000/logs', text);
  }


  test(input) {
    console.log('hitting the service');
    console.log(input);
    return this.http.get('http://localhost:5000');
  }


  uploadImage(text) {
    console.log(text);
    return this.http.post('http://localhost:5000/uploadText/', text);
  }
}
