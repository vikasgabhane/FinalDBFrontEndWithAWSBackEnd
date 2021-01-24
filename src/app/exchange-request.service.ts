import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { ExchangeRequest } from './exchange-request';
import { ExchangeRequestsComponent } from './exchange-requests/exchange-requests.component';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRequestService {

  
  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/exchangereq"

  addBook(bookId:number,book: Book): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${bookId}`, book);
  }

  getBookList(userId:number): Observable<ExchangeRequest[]> {
    return this.httpClient.get<ExchangeRequest[]>(`${this.baseURL}/${userId}`);
  }

  //Request Delete by Id
  deleteBook(exchangeId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${exchangeId}`);
  }

  //get request By Id for delete puspose
  private baseURL1 = "http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/exchangereq2"
  getRequestByExchangeId(exchangeId: number): Observable<ExchangeRequest> {
    return this.httpClient.get<ExchangeRequest>(`${this.baseURL1}/${exchangeId}`);
  }

  // for Sent or pending Req
  private baseURL2 = "http://ec2-54-234-103-17.compute-1.amazonaws.com:8080/exchangereq1"
  getSentRequestList(userId:number): Observable<ExchangeRequest[]> {
    return this.httpClient.get<ExchangeRequest[]>(`${this.baseURL2}/${userId}`);
  }

}
