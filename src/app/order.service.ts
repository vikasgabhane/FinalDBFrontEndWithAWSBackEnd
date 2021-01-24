import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/order"

  placeOrder(exchangeId:number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/${exchangeId}`);
  }

  //Book And Request Delete by Id
  deleteBookAndRequest(exchangeId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${exchangeId}`);
  }
}
