import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiURL='http://localhost:3000/user';
  api_marks_URL='http://localhost:3000/avg-marks';
  

  constructor(private _http:HttpClient) {}

  getAllData():Observable<any>{
    return this._http.get(`${this.apiURL}`);
  }

  getAllProcessData():Observable<any>{
    return this._http.get(`${this.api_marks_URL}`);
  }

  getSingleData(id:any):Observable<any>{
    let ids=id;
    return this._http.get(`${this.apiURL}/${ids}`);
  }
  
  createData(data:any):Observable<any>{
    return this._http.post(`${this.apiURL}`,data);
  }

  deleteData(id:any):Observable<any>{
    let ids=id;
    return this._http.delete(`${this.apiURL}/${ids}`);
  }

  updateData(data:any,id:any):Observable<any>{
    let ids=id;
    return this._http.put(`${this.apiURL}/${ids}`,data);
  }
}
