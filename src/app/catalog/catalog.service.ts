import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListing } from '../interfaces/listing';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getListings(maxCount?: number) {
    let url = '/api/themes';
    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<IListing[]>(url);
  }
  
  addListing(  value: any, headers: object ) {
    console.log('value', value.title);
    // console.log('value V', Object.values(value));
    console.log('headers ', headers);
    return this.http.post<IListing>('/data/catalog',  value , headers)
  }

  getList(id: string) {
    return this.http.get<IListing>('/data/catalog/' + id);
  }

  editListing( id: string,  value: any, headers: object ) {
    // console.log('value', value.title);
    // console.log('value V', Object.values(value));
    // console.log('headers ', headers);
    return this.http.put<IListing>('/data/catalog/'+ id,  value , headers)
  }

  deleteList(id: string, headers: object) {
    return this.http.delete<IListing>('/data/catalog/' + id , headers);
  }
}
