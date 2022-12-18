import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadTopBookings() {
    return this.httpClient.get(`/data/catalog`);
  }
}
