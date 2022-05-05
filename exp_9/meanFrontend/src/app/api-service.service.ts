import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiURLget='http://localhost:8080/read';
  apiURLpost='http://localhost:8080/create';
  apiURLupdate='http://localhost:8080/update';
  apiURLdelete='http://localhost:8080/delete';


  constructor(private _http:HttpClient) {}

    getAllData():Observable<any>{
      return this._http.get(`${this.apiURLget}`);
    }

    getSingleData(id:any):Observable<any>{
      let ids=id;
      return this._http.get(`${this.apiURLget}/${ids}`);
    }
    
    createData(data:any):Observable<any>{
      return this._http.post(`${this.apiURLpost}`,data);
    }

    deleteData(id:any):Observable<any>{
      let ids=id;
      return this._http.delete(`${this.apiURLdelete}/${ids}`);
    }

    updateData(data:any,id:any):Observable<any>{
      let ids=id;
      return this._http.put(`${this.apiURLupdate}/${ids}`,data);
    }
   
}
